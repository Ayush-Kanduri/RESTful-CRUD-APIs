//Creates the same instance of mongoose which is used in the MongoDB configuration inside config
const mongoose = require("mongoose");

//Creates a new product schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
});

//Creates a new product model
const Product = mongoose.model("Product", productSchema);

//Exports the product model
module.exports = Product;
