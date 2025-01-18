const express=require("express")
const asyncHandler =require("express-async-handler")
const Shop =require("./../Models/ShopModel.js")
const {protect,admin}=require("../Middleware/AuthMiddleware.js")
const shopRouter=express.Router()
shopRouter.get(
    "/",
    asyncHandler(async (req,res)=>{
        const shop=await Shop.find({})
        res.json(shop)
    })
)
shopRouter.get(
    "/all",
    protect,
    admin,
asyncHandler(async (req, res)=>{
    const products=await Shop.find({}).sort({_id: -1});
    res.json(products);
   })
)
module.exports=shopRouter;
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
