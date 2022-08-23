module.exports.homepage = (req, res) => {
	return res.status(200)
		.send(`<h1>Welcome to the RESTful CRUD API Homepage 🚀</h1>
    <br>
    <h2>Available Routes:</h2>
    <ul>
        <li>GET /products - Get all the products</li>
        <li>GET /products/:id - Get a particular product</li>
        <li>DELETE /products/:id - Delete a particular product</li>
        <li>POST /products/create - Create a product</li>
        <li>POST /products/:id/update_quantity/?number=10 - Update a product's quantity</li>
    </ul>`);
};
