
const express=require("express")
const ImportData=require("./DataImport.js")
const productRouter=require("./Routes/ProductRouter.js")
const shopRouter=require("./Routes/ShopRouter.js")
const userRouter=require("./Routes/UserRoute.js")
const orderRouter=require("./Routes/OrderRouter.js")
const {notFound,errorHandler}=require("./Middleware/Errors.js")
const dotenv=require("dotenv")
const connectDatabase=require("./config/MongoDB.js")
const cors=require('cors')
const app=express();
const path=require("path")

dotenv.config()
connectDatabase({
    useNewUrlParser:true
})

app.use(express.json())

app.use(cors({
    origin:'https://accessoriesaz-turqay667s-projects.vercel.app',
    credentials:true
}));


app.use("/api/import", ImportData);
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/orders",orderRouter)
app.use("/api/shop", shopRouter)
app.use("/api/config/paypal", (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})



if (process.env.NODE_ENV === 'production'){
const buildPath=path.join(__dirname, "client", "build")
console.log(`Serving static files from ${buildPath}`)
app.use(express.static(buildPath))

// app.use("/images", (req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://accessoriesazz-turqay667s-projects.vercel.app/");
//     next();
// });
app.get("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.sendFile(path.resolve(buildPath, "index.html"));
});
}

app.use(notFound);
app.use(errorHandler);

app.get("/",(req,res)=>{
    res.send("API is running on this port")
})
const PORT=process.env.PORT || 1000;
app.listen(PORT,console.log(`server is running on ${PORT}`))