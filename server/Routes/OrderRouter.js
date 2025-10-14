const express=require("express")
const asyncHandler =require("express-async-handler")
const Orders=require("../Models/OrderModel.js")
const {protect,admin} =require("../Middleware/AuthMiddleware.js")

const orderRouter=express.Router();

orderRouter.post("/",
protect,
asyncHandler(async (req,res)=>{
const {
    orderItems,
    shippingAddress,
    totalPrice,
 
}=req.body;
if(orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No orders to show")
    return;
}
else{
    const order=new Orders({
        orderItems,
        user:req.user._id,
        shippingAddress,
        totalPrice,
      
      
    });
   
   try{
    const createOrders=await order.save();
    res.status(201).json(createOrders);
}
   catch(err){
    res.status(400).json({error:err.message})
    console.error(err)
   }
}
})
);
orderRouter.get(
    "/all",
    protect,
    admin,
asyncHandler(async (req, res)=>{
    const keyword=req.query.keyword
    ? {
       name:{
        $regex:req.query.keyword,
        $options:"i"
       }
   }
   :{}
    const orders=await Orders.find({...keyword})
   
    .sort({_id:-1})
    .populate(
    "user",
    "id name email"
    )
    res.json(orders);
   })
)

orderRouter.get("/:id",
protect,
asyncHandler(async (req,res)=>{

const order= await Orders.findById(req.params.id).populate(
    "user",
    "name email"
);
if(order){
    res.json(order);
}
else{
    res.status(404);
    throw new Error("Order was not found")
}
})
)

orderRouter.put("/:id/pay",
protect,
asyncHandler(async (req,res)=>{

const order= await Orders.findById(req.params.id)

if(order){
    order.isPaid=true;
    order.paidAt=Date.now;
    order.paymentResult={
        id:req.body.id,
        status:req.body.status,
        update_time:req.body.update_time,
        email_address:req.body.email_address
    }
    const updateOrder=await order.save();
    res.json(updateOrder);

    }
else{
    res.status(404);
    throw new Error("Order was not found")
}
})
)
module.exports=orderRouter;