const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const productRouter = require("./products");

router.use("/", homeRouter);
router.use("/products", productRouter);

module.exports = router;
