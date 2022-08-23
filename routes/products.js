const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products_controller");

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProduct);
router.delete("/:id", productsController.deleteProduct);
router.post("/:id/update_quantity", productsController.updateProductQuantity);
router.post("/create", productsController.createProduct);

module.exports = router;
