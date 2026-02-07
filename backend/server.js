import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./db/db.js";
const app = express();
const PORT = process.env.PORT ||5000;
app.get("/",(req,res)=>{
   res.json({
    message:"api is healthy"
   })
})


app.listen(PORT,(res)=>{
    connectDB()
    console.log(`server is up and running http://localhost:${PORT}`)
})


