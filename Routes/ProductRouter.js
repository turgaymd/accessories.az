
const express=require("express")
const asyncHandler =require("express-async-handler")
const Product =require("./../Models/ProductModel.js")
const {admin,protect} =require("../Middleware/AuthMiddleware.js")

 const productRouter=express.Router()
 productRouter.get(
     "/",
     asyncHandler(async (req,res)=>{
        const pageSize=4;
        const page=Number(req.query.pageNumber) || 1;
        
      
    
        const keyword=req.query.keyword
         ? {
            name:{
             $regex:req.query.keyword,
             $options:"i",
            },
        }
        :{};
        const count=await Product.countDocuments({...keyword})
        const products=await Product.find({ ...keyword })
        res.json(products)
    })
)
// productRouter.get(
//     "/all",
//     protect,
//     admin,
// asyncHandler(async (req, res)=>{
//     const keyword=req.query.keyword
//     ? {
//        name:{
//         $regex:req.query.keyword,
//         $options:"i"
//        }
//    }
//    :{}
//     const products=await Product.find({...keyword}).sort({_id:-1});
//     res.json(products);
//    })
// )
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
productRouter.post(
    "/:id/review",
    protect,
    asyncHandler(async (req,res)=>{
        const {rating,comment}=req.body
        const product=await Product.findById(req.params.id)
        if(product){
            const alreadyReviewed=product.reviews.find(
                (r)=>r.user.toString()===req.user._id.toString()
            )
            if(alreadyReviewed){
                res.status(400)
                throw new Error("product already reviewed")
            }
            const review={
                name:req.user.name,
                rating:Number(rating),
                comment,
                user:req.user._id,
            }
            product.reviews.push(review)
            product.numReviews=product.reviews.length
            product.rating=
            product.reviews.reduce((acc,item)=>item.rating+acc,0)/product.reviews.length;
            await product.save
            res.status(201).json({message:"Review added for a product"})
        }else{
            res.status(404)
            throw new Error("Product was not found")
        }
    })
)   
        //  .limit(pageSize)
        //  .skip(pageSize * (page-1))
        //  .sort({_id: -1});
       

// productRouter.post(
//     "/",
//     protect,
//     admin,
//     asyncHandler(async (req,res)=>{
//         const {name,mainImage,price,desc,countInStock}=req.body;
//         const productExist=await Product.findOne({name})
//         if(productExist){
//             res.status(400)
//             throw new Error("Product already exists")
//         }
//         else{
//             const product=new Product({
//                 name,
//                 mainImage,
//                 price,
//                 desc,
//                 countInStock,
//                 user:req.user._id,
//             })
//             if(product){
//                 const createdproduct=await product.save()
//                 res.status(201).json(createdproduct)
//             }
//             else{
//                 res.status(400)
//                 throw new Error("Invalid product data")
//             }
//         }
//     })
//     );
 
// productRouter.delete(
//     "/:id",
//     protect,
//     admin,
//     asyncHandler(async (req,res)=>{
//         const product=await Product.findById(req.params.id)
//         if(product){
//             await product.remove()
//         res.json({message:"Product deleted"})
//         }else{
//             res.status(404)
//             throw new Error("Product was not found")
//         }
//     })
// )
// productRouter.put(
//     "/:id",
//     protect,
//     admin,
//     asyncHandler(async (req,res)=>{
//         const {name,mainImage,price,desc,countInStock}=req.body;
//         const product=await Product.findById(req.params.id)
//      if(product){
//                 product.name=name || product.name;
//                 product.mainImage=mainImage|| product.mainImage;
//                 product.price=price || product.price;
//                 product.desc=desc || product.desc;
//                 product.countInStock=countInStock || product.countInStock;
//                 const updatedProduct=await product.save();
//                 res.json(updatedProduct);
//      }
//             else{
//                 res.status(404)
//                 throw new Error("Product was not found")
//             }
//         })
//     );



//creating new product


  


module.exports=productRouter;