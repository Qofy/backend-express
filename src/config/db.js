import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient({
log: process.env.NODE_ENV ==="development" ? ["query", "error", "warn"]:["error"],
})
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