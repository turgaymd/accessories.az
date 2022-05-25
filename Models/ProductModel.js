const mongoose =require("mongoose")
const productSchema=mongoose.Schema({
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
productSchema.pre("save",async function(next){
    next()
})
const Product=mongoose.model("Product",productSchema)
module.exports= Product;