const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products_controller");

router.get("/", productsController.getAllProducts);
router.get("/:id", productController.getProduct);
router.delete("/:id", productsController.deleteProduct);
router.post(
	"/:id/update_quantity/?number=10",
	productsController.updateProductQuantity
);
router.post("/create", productsController.createProduct);

module.exports = router;
