import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import generateToken from "../utiles/tokengenerate.js";

const register = async (req, res) => {
    try {
        const {name,email, password} = req.body;

        //check if user already exist
        const userexisted = await prisma.user.findUnique({
            where: {email},
        });
        if(userexisted){
            return res.status(400).json({error: "User email already exist with this email"});
        }

        //hashpassword
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        //create User
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password: hashpassword,
            }
        });
            //generate JWT Token
        const token = generateToken(user.id, res)

        res.status(201).json({
            status:"success",
            data:{
                user:{
                    id: user.id,
                    name: user.name,
                    email:user.email,
                },
                token,
            }
        });
    } catch(error) {
        console.error("Register error:", {
            message: error.message,
            code: error.code,
            meta: error.meta,
            stack: error.stack
        });
        res.status(500).json({error: error.message});
    }
};

const login = async (req, res)=>{
        try{const {email, password} = req.body;

         //check if email exist
        const user = await prisma.user.findUnique({
            where: {email},
        });
        if(!user){
            return res.status(401).json({error: "Invalid email or password"});
        }

        //verify password
        const IsPasswordValid = await bcrypt.compare(password, user.password);
        if(!IsPasswordValid){
            return res.status(401).json({error: "Invalid email or password"});

        }
        //generate JWT Token
        const token = generateToken(user.id, res)

          res.status(201).json({
            status:"success",
            data:{
                user:{
                    id: user.id,
                    email:user.email,
                },
                token,
            }
        });
}catch(error) {
        console.error("Register error:", {
            message: error.message,
            code: error.code,
            meta: error.meta,
            stack: error.stack
        });
        res.status(500).json({error: error.message});
    }
}

const logout = async ()=>{
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(201).json({
            status:"success",
            message: " Log out successfully",
        });
}

export {register, login, logout};