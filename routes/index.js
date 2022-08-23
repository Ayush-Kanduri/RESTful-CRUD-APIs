//Require the existing Express
const express = require("express");
//Create a Local Router
const router = express.Router();

//Require the Home Router
const homeRouter = require("./home");
//Require the Products Router
const productRouter = require("./products");

//Use the Home Router
router.use("/", homeRouter);
//Use the Products Router
router.use("/products", productRouter);

//Export the Router
module.exports = router;
