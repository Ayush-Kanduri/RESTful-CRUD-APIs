const Product = require("../models/products");
const { v4: uuidv4 } = require("uuid");

//Creates a new product
module.exports.createProduct = async (req, res) => {
	try {
		const { name, quantity } = req.body;
		//Generate a unique id for the product - For the temporary basis
		const id = uuidv4();
		//Create a new product
		let product = await Product.create({
			name,
			quantity: Number(quantity),
			id,
		});
		product.id = product._id;
		await product.save();
		//Removes unnecessary properties from the display
		product = product.toObject();
		delete product._id;
		delete product.__v;
		//Returns the JSON response
		return res.status(201).json({
			message: "Product created successfully",
			data: { product },
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Internal Server Error",
			data: error,
		});
	}
};

//Reads a particular product
module.exports.getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		//Finds the product with the given id
		let product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({
				message: "Product not found",
				data: {},
			});
		}
		//Removes unnecessary properties from the display
		product = product.toObject();
		delete product._id;
		delete product.__v;
		//Returns the JSON response
		return res.status(200).json({
			message: "Product retrieved successfully",
			data: { product },
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Internal Server Error",
			data: error,
		});
	}
};

//Reads all the products
module.exports.getAllProducts = async (req, res) => {
	try {
		//Finds all the products
		let products = await Product.find();
		if (products.length === 0) {
			return res.status(404).json({
				message: "No products found",
				data: [],
			});
		}
		//Removes unnecessary properties from the display
		products = products.map((product) => {
			product = product.toObject();
			delete product._id;
			delete product.__v;
			return product;
		});
		//Returns the JSON response
		return res.status(200).json({
			message: "Products retrieved successfully",
			data: { products },
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Internal Server Error",
			data: error,
		});
	}
};

//Updates a particular product's quantity
module.exports.updateProductQuantity = async (req, res) => {
	try {
		const { id } = req.params;
		const { number } = req.query;
		//Finds the product with the given id
		let product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({
				message: "Product not found",
				data: {},
			});
		}
		//Updates the product's quantity
		product.quantity += Number(number);
		await product.save();
		//Removes unnecessary properties from the display
		product = product.toObject();
		delete product._id;
		delete product.__v;
		//Returns the JSON response
		return res.status(200).json({
			message: "Product quantity updated successfully",
			data: { product },
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Internal Server Error",
			data: error,
		});
	}
};

//Deletes a particular product
module.exports.deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		//Finds the product with the given id
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({
				message: "Product not found",
				data: {},
			});
		}
		//Deletes the product
		await product.remove();
		//Returns the JSON response
		return res.status(200).json({
			message: "Product deleted successfully",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "Internal Server Error",
			data: error,
		});
	}
};
