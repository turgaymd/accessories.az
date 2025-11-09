const mongoose=require("mongoose")

const connectDatabase=async()=>{
try{
  await mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
console.log("MongoDB connection is established")
}
catch(error){
console.log("database connection failed")
process.exit(1)
}
}
module.exports=connectDatabase;