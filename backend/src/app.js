require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const userRoute = require("../src/routers/user");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Server Running " });
});
app.use("/api/user", userRoute);

app.listen(process.env.PORT, async () => {
    console.log("Server Starting at " + process.env.PORT);
});
