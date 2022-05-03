const express =require("express");
const User =require("./Models/UserModel.js");
const users =require("./data/Users.js");
const products =require("./data/Product.js");
const shop =require("./data/Shop.js")
const Shop =require("./Models/ShopModel.js");
const Product =require ("./Models/ProductModel.js");
const asyncHandler =require("express-async-handler");

const ImportData=express.Router()

ImportData.post(
    "/user", 
    asyncHandler(async (req,res)=>{
    await User.remove({})
    const ImportUser=await User.insertMany(users);
    res.send({ImportUser});
})
);
ImportData.post(
    "/products", 
    asyncHandler(async (req,res)=>{
    await Product.remove({});
    const ImportProducts=await Product.insertMany(products);
    res.send({ImportProducts});
})
);
ImportData.post(
    "/shop", 
    asyncHandler(async (req,res)=>{
    await Shop.remove({});
    const ImportShop=await Shop.insertMany(shop);
    res.send({ImportShop});
})
);
module.exports= ImportData;