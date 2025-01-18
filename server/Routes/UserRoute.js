const express=require("express")
const asyncHandler =require("express-async-handler")
const User =require("./../Models/UserModel.js")
const {protect,admin}=require("../Middleware/AuthMiddleware.js")
const generateToken=require("../utils/generateToken.js")
const userRouter=express.Router();

userRouter.post(
   "/login",
   asyncHandler(async (req,res)=>{
    const {username, password}=req.body
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))){
        res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user._id),
                createdAt:user.createdAt,
})
} else{
    res.status(401)
    throw new Error("Invalid Email or Password")

}
})
)




userRouter.post(
    "/",
    asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body
    const userExists =await User.findOne({email});
    if(userExists){

        res.status(400)
        throw new Error("User already exists")
    }
    const user= await User.create({
        name,
        email,
        password,
    });
    if(user){
    res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)

    })
}
    else{
        res.status(400);
        throw new Error("Invalid user data")
    }
})
)
userRouter.get(
    '/profile',
    protect,
    asyncHandler(async (req, res)=>{
        const user=await User.findById(req.user._id);
        if(user){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                createdAt:user.createdAt
    
        });

        }else{
res.status(404)
throw new Error("User not found")
        }
    })
)
userRouter.get(
"/",
protect,
admin,
asyncHandler(async (req, res)=>{
 const users= await User.find({});
 res.json(users);
})
)
module.exports= userRouter;