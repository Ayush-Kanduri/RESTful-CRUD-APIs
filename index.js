const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const env = require("./config/environment");
const db = require("./config/mongoose");
const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server is running successfully on port ${port}`);
});
