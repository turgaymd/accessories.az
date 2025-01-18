const mongoose=require("mongoose")
mongoose.set('strictQuery', false)
const orderSchema=mongoose.Schema({
    user:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:"User",
    },
orderItems:[
    {
name:{type:String,required:true},
qty:{type:Number,required:true},
image:{type:String,required:true},
price:{type:Number,required:true},
product:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Product",
},
    },
],

shippingAddress: {
  street:  {type:String,required:true},
  city:  {type:String,required:true},
  zipcode:  {type:String,required:true},
  country:  {type:String,required:true},
},
totalPrice:{
    type:Number,
    required:true,
},
isPaid:{
type:Boolean,
required:true,
default:false,
},
paidAt:{
    type:Date,
},
isDelivered:{
type:Boolean,
required:true,
default:false,
},
deliveredAt:{
    type:Date,
},
},{
timestamps:true
})
orderSchema.pre("save",async function(next){
})
const Orders=mongoose.model("Orders",orderSchema)
module.exports=Orders;

