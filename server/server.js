import  express from 'express'
import dotenv from "dotenv"
import products from './data/Product.js'
import shop from './data/Shop.js'
import connectDatabase from './config/MongoDB.js'
import ImportData from './DataImport.js'
import userRouter from "./Routes/UserRoute.js"
import productRouter from './Routes/ProductRouter.js'
import shopRouter from './Routes/ShopRouter.js'
import {notFound,errorHandler} from "./Middleware/Errors.js"
dotenv.config()
connectDatabase()
const app=express();
app.use(express.json())
app.use("/api/import", ImportData);
app.use("/api/products", productRouter)
app.use("/api/shop/", shopRouter)
app.use("/api/users", userRouter)

// const path=require("path")
//if (production.env.NODE_ENV === 'production'){
// app.use(express.static(path.join(__dirname, "client", "build")))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
//}


// app.get("/api/shop", (req,res)=>{
//     res.json(shop);
// })
// app.get("/api/shop/:id", (req,res)=>{
//     const product = shop.find((p)=>p.id === req.params.id);
//     res.json(product);
// });
app.use(notFound);
app.use(errorHandler);
app.get("/api/config/paypal",(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})
app.get("/",(req,res)=>{
    res.send("API is running on this port")
})
const PORT=process.env.PORT || 1000;
app.listen(PORT,console.log(`server is running on ${PORT}`))