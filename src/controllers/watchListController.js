import { prisma } from "../config/db.js";

export const addToWatchList=async (req, res)=>{
    const {movieId, status, rating} = req.body

    //Verifying movies exists
    const movie = await prisma.movie.findUnique({
        where: {id: movieId},
    });
    if(!movie){
        return res.status(404).json({error: " Movie not found"});
    }

    //check if already added
    const existingInWatchList= prisma.movie.findUnique({
        where: {userId_movieId:{
            userId: req.user.id,
            movieId: movieId,
        }},
    });
    if(existingInWatchList){
        return res.status(400).json({error: " Movie already in watchList"});
    }

    const watchlistItem = await prisma.watchListItem.create({
        data:{
            userId: req.user.id,
            movieId,
            status: status || "PLANNED",
            rating,
            notes,
        }
    });
    res.status(201).json({
        status:"Success",
        data:{
            watchlistItem,
        },
    })
}

