import express from "express";
import Cart from "../models/cart.model.js"
const router = express.Router();
router.get("/", async(req,res)=>{
    try {
        const items =  await Cart.find().populate('product');
        res.json(items)
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
})
router.post("/",async(req,res)=>{
    try {
        const {productId,quantity} = req.body;
        let item =  await cart.findOne({
            product:productId
        })
        if(item){
            item.quantity +=quantity;
            await item.save();
        }
        else{
            item = await cart.create({
                product:productId,
                quantity,
            })
        }
           res.status(201).json({ success: true, data: item });
        
    } catch (error) {
           res.status(500).json({
            message:"controller failed to fetch"
           });
        
    }
})
router.put("/:id", async (req,res)=>{
    try {
        const {quantity} = req.body;
        if(!quantity || quantity<1){
            return res.status(400).json({
                success:false,
                message:"quantity must be at least 1"
            })
        }
        const item = await Cart.findByIdAndUpdate(req.params.id,{
            quantity
        },{new:true}).populate('product');
        if(!item){
            return res.status(404).json()({
                success:false,
                message:"cart item not found"
            })
        }
        res.json({
            success :true,
            data:item
        })
        
    } catch (error) {
    
        res.status(500).json({
              success: false,
            message: 'Internal server error'
        })

        
    }
})
router.delete("/:id",async (req,res)=>{
    try {
        const item = await Cart.findByIdAndDelete(req.params.id);
        if(!item){
            return res.status(404).json({
                success:false,
                message:"cart item not found"
            })
        }
        res.json({
            success:true,
            message:"item removed from cart"
        })
        
    } catch (error) {

        return res.status(500).json({
            message:"error in controller"
        })
        
    }
})



export default router;