require("dotenv").config();
const express = require("express");
const morgan= require('morgan');
const userRoute = require("../src/routers/user");
const productRouter = require("./routers/product")

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server Running " });
});
app.use("/api/user", userRoute);
app.use("/api/products", productRouter)

app.listen(process.env.PORT, async () => {
    console.log("Server Starting at " + process.env.PORT);
});
