
const express=require("express")
const asyncHandler =require("express-async-handler")
const Product =require("./../Models/ProductModel.js")
 const productRouter=express.Router()
 productRouter.get(
     "/",
     asyncHandler(async (req,res)=>{
        const keyword=req.query.keyword
         ? {
            name:{
             $regex:req.query.keyword,
             $options:"i"
            }
        }
        :{}
         const products=await Product.find({ ...keyword })
         res.json(products)
     })
 )
 productRouter.get(
    "/:id",
    asyncHandler(async (req,res)=>{
        const product=await Product.findById(req.params.id)
        if(product){
        res.json(product)
        }else{
            res.status(404)
            throw new Error("Product was not found")
        }
    })
)
module.exports=productRouter;