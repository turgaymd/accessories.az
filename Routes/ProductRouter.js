
const express=require("express")
const asyncHandler =require("express-async-handler")
const Product =require("./../Models/ProductModel.js")
const {admin,protect} =require("../Middleware/AuthMiddleware.js")

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
         .sort({_id: -1});
         res.json(products)
     })
 )
 productRouter.get(
    "/all",
    protect,
    admin,
asyncHandler(async (req, res)=>{
    const products=await Product.find({}).sort({_id:-1});
    res.json(products);
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

//creating new product
productRouter.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req,res)=>{
        const {name,image,price,desc}=req.body;
        const productExist=await Product.findOne({name})
        if(productExist){
            res.status(400)
            throw new Error("Product already exists")
        }
        else{
            const product=new Product({
                name,
                image,
                price,
                desc,
                user:req.user._id,
            })
            if(product){
                const createdproduct=await product.save()
                res.status(201).json(createdproduct)
            }
            else{
                res.status(400)
                throw new Error("Invalid product data")
            }
        }
    })
    );

  


module.exports=productRouter;