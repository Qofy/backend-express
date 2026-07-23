import jwt from "jsonwebtoken";
import {prisma} from '../config/db.js'

//Read the token from the request endpoint
//Check if token is valid

export const authMiddleware = async (req, res, next)=>{
    let token;
    if (req.headers.authorization && req.headers.authorization.startWith("Bearer")){
        token = res.headers.authorization.split(" ")[1];
    }else if (req.cookies?.jwt){
        token = req.cookies.jwt;
    }
    if(!token){
        return res.status(401).json({error: "Not authorized, no token provided"});
    }

    try{
        //verify the token and extract the user Id
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: {id: decode.id},
        });
        if (!user){
            return res.status(401).json({error: "USer no longer exists"})
        }
        req.user = user
        next();
    }catch(err){
        return res.status(401).json({error: err})
    }
}