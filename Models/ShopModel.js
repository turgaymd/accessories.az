const mongoose =require("mongoose")
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
},
long_desc:{
    type:String,
    required:true
},
countInStock:{
    type:Number,
    required:true
}
},{
timestamps:true
}
)
shopSchema.pre("save",async function(next){
})
const Shop=mongoose.model("Shop",shopSchema)
Shop.save;
module.exports= Shop;