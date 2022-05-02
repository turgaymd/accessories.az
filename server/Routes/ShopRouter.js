import express from "express"
import asyncHandler from "express-async-handler"
import Product from "./../Models/ProductModel.js"
import Shop from "../Models/ShopModel.js"
const shopRouter=express.Router()
shopRouter.get(
    "/",
    asyncHandler(async (req,res)=>{
        const shop=await Shop.find({})
        res.json(shop)
    })
)
shopRouter.get(
    "/:id",
    asyncHandler(async (req,res)=>{
        const shop=await Shop.findById(req.params.id)
        if(shop){ 
        res.json(shop)
        }else{
            res.status(404)
            throw new Error("Product was not found")
        }
    })
)
export default shopRouter;