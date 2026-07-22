import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

console.log("DATABASE_URL loaded:", connectionString ? "✓" : "✗");
console.log("Actual DATABASE_URL:", connectionString ? connectionString.substring(0, 50) + "..." : "undefined");

const pool = new Pool({
  connectionString,
});

pool.on("error", (err) => {
  console.error("Pool connection error:", err.message);
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});
const connectDb = async()=>{
    try{
        await prisma.$connect() 
        console.log("Database connected sucessfully");

    }catch(error){
        console.log(`There is an error when connecting the db ${error.message}`);
        process.exit(1);

    };
};

const disconnectDb = async ()=>{
    await prisma.$disconnect();

};
export{prisma, connectDb, disconnectDb}