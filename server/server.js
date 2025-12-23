const express = require("express");
const productRouter = require("./Routes/ProductRouter.js");
const userRouter = require("./Routes/UserRoute.js");
const orderRouter = require("./Routes/OrderRouter.js");
const { notFound, errorHandler } = require("./Middleware/Errors.js");
const dotenv = require("dotenv");
const connectDatabase = require("./config/MongoDB.js");
const cors = require("cors");
const app = express();
const path = require("path");

dotenv.config();
connectDatabase({
  useNewUrlParser: true,
});

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://accessories-az.onrender.com"],
  })
);

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

if (process.env.NODE_ENV === "production") {
  const buildPath = path.resolve(__dirname, "..", "client", "build");
  app.use(express.static(buildPath));

  app.use("/images", (req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://accessories-az.onrender.com"
    );
    next();
  });
  app.get("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.sendFile(path.resolve(buildPath, "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("API is running on this port");
});
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server is running on ${PORT}`));
