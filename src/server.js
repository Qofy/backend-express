import 'dotenv/config';

import express from 'express';
import moviesRouters from './routes/moviesRouters.js'
import authRouters from './routes/authRouter.js'
import watchList from './routes/watchListRouter.js'
import { connectDb, disconnectDb } from './config/db.js';
await connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/auth', authRouters)
app.use('/movies', moviesRouters)
app.use('/watchlist', watchList)
const PORT = 5001;
const server= app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`)
});

// Handle unhandle promise rejecttion (e.g database connected errors)
process.on("unhandledRejection", (err)=>{
    console.error("unhandledRejection:", err)
    server.close(async()=>{
        await disconnectDb();
        process.exit(1);
    });
});

//handle uncaught exceptions
process.on("uncaughtException", async(err)=>{
    console.error("uncaughtException:", err)
    await disconnectDb();
    process.exit(1);
});

process.on("SIGTERM", async()=>{
    console.log("SIGTERM received, shutting down gracefully")
    server.close(async()=>{
        await disconnectDb();
        process.exit(1);
    });
});