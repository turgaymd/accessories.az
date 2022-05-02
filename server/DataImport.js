import express  from "express";
import User from "./Models/UserModel.js";
import users from "./data/Users.js";
import products from "./data/Product.js";
import shop from "./data/Shop.js"
import Shop from "./Models/ShopModel.js";
import Product from "./Models/ProductModel.js"
import asyncHandler from "express-async-handler";

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
export default ImportData;