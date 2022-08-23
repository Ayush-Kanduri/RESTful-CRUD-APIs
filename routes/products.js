//Require the existing Express
const express = require("express");
//Create a Local Router
const router = express.Router();

//Require Products Controller
const productsController = require("../controllers/products_controller");

//Access the Products Controller's getAllProducts() Function @ '/products' route.
router.get("/", productsController.getAllProducts);
//Access the Products Controller's getProduct() Function @ '/products/:id' route.
router.get("/:id", productsController.getProduct);
//Access the Products Controller's deleteProduct() Function @ '/products/:id' route.
router.delete("/:id", productsController.deleteProduct);
//Access the Products Controller's updateProductQuantity() Function @ '/products/:id/update_quantity/?number=X' route.
router.post("/:id/update_quantity", productsController.updateProductQuantity);
//Access the Products Controller's createProduct() Function @ '/products/create' route.
router.post("/create", productsController.createProduct);

//Export the Router
module.exports = router;
