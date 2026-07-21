import express from 'express';
import moviesRouters from './routes/moviesRouters.js'
import { config } from 'dotenv';
import { connectDb, disconnectDb } from './config/db.js';

config();
connectDb();
const app = express();
app.use('/movies', moviesRouters)
const PORT = 5001;
app.listen(PORT, ()=>{
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