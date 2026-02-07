import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import dns from "node:dns/promises";   
dns.setServers(["1.1.1.1", "1.0.0.1"]); 
export const connectDB = async (req,res)=>{
    try {
     const conn =  await mongoose.connect(process.env.MONGO_URI);
     console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log("connection failed ")
        process.exit(1);
        
    }
}