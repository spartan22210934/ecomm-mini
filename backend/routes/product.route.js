import express from "express";
import Product from "../models/product.model.js"
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({
            success: true,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})





export default router;