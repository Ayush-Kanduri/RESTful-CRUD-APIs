const Product = require("../models/products");
const { v4: uuidv4 } = require("uuid");

module.exports.createProduct = async (req, res) => {
	try {
		const { name, quantity } = req.body;
		const id = uuidv4();
		let product = await Product.create({
			name,
			quantity: Number(quantity),
			id,
		});
		product.id = product._id;
		await product.save();
		product = product.toObject();
		delete product._id;
		delete product.__v;
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

module.exports.getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		let product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({
				message: "Product not found",
				data: {},
			});
		}
		product = product.toObject();
		delete product._id;
		delete product.__v;
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

module.exports.getAllProducts = async (req, res) => {
	try {
		let products = await Product.find();
		if (products.length === 0) {
			return res.status(404).json({
				message: "No products found",
				data: [],
			});
		}
		products = products.map((product) => {
			product = product.toObject();
			delete product._id;
			delete product.__v;
			return product;
		});
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

module.exports.updateProductQuantity = async (req, res) => {
	try {
		const { id } = req.params;
		const { number } = req.query;
		let product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({
				message: "Product not found",
				data: {},
			});
		}
		product.quantity += Number(number);
		await product.save();
		product = product.toObject();
		delete product._id;
		delete product.__v;
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

module.exports.deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({
				message: "Product not found",
				data: {},
			});
		}
		await product.remove();
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
