import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`server is up and running http://localhost:${PORT}`)
})


