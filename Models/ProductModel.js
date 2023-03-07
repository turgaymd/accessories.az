const mongoose =require("mongoose")
const reviewSchema=mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    }
},{
    timestamps:true,

});
const productSchema=mongoose.Schema({
name:{
    type:String,
    required:true,
},
        mainImage:{ type:String,required:true},
        smallImage:{ type:String,required:false},
        smallImage2:{type:String,required:false},
price:{
    type:Number,
    required:true,
    default:0,
},
desc:{
    type:String,
    required:true,
},
longDesc:{
    type:String,
    required:false,
},
countInStock:{
    type:Number,
    required:false,
},
reviews:[reviewSchema],
rating:{
    type:Number,
    required:true,
    default:0,
},
numReviews:{
    type:Number,
    required:true,
    default:0,
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


