require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.listen(process.env.PORT, async () => {
    console.log("Server Starting at " + process.env.PORT);
});
