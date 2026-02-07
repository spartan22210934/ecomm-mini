import express from "express";

import { connectDB } from "./db/db.js";
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"

const app = express();
const PORT = process.env.PORT ||5000;
app.use(express.json());
app.use("/product",productRoutes)
app.use("/cart",cartRoutes)
app.listen(PORT,(res)=>{
    connectDB()
    console.log(`server is up and running http://localhost:${PORT}`)
})


