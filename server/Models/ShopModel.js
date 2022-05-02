import mongoose from "mongoose"
const shopSchema=mongoose.Schema({
name:{
    type:String,
    required:true,
},
image:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true,
    default:0,
},
desc:{
    type:String,
    required:true,
}
},{
timestamps:true
}
)
const Shop=mongoose.model("Shop",shopSchema)
export default Shop;