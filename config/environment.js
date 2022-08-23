const dotenv = require("dotenv").config();

const development = {
	name: "development",
	db: process.env.DEVELOPMENT_DB,
	db_name: process.env.DEVELOPMENT_DB_NAME,
	deployment: process.env.DEVELOPMENT_DEPLOYMENT,
};

const production = {
	name: "production",
	db: process.env.DB,
	db_name: process.env.DB_NAME,
	deployment: process.env.DEPLOYMENT,
};

module.exports =
	eval(process.env.NODE_ENV) == undefined
		? development
		: eval(process.env.NODE_ENV);
