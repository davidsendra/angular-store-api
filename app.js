if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
require("./mongo");
const cors = require("cors");
const Product = require("./models/Product");
const { Category } = require("./models/Category");
const validateNewProduct = require("./middlewares/validateNewProduct");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/taller-web-2/api/products", async (req, res, next) => {
	try {
		const products = await Product.find({});
		res.json(products);
	} catch (error) {
		next(error);
	}
});

app.get("/taller-web-2/api/products/:category", async (req, res, next) => {
	try {
		const category = req.params.category;
		const products = await Product.find({ category });
		res.json(products);
	} catch (error) {
		next(error);
	}
});

app.get("/taller-web-2/api/product/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const product = await Product.findById(id);

		product ? res.json(product) : res.status(404).end();
	} catch (error) {
		next(error);
	}
});

app.post("/taller-web-2/api/product", validateNewProduct, async (req, res, next) => {
	try {
		const product = req.body;
		const newProduct = new Product({
			name: product.name,
			description: product.description,
			price: product.price,
			category: product.category,
			urlImage: product.urlImage
		});

		const result = await newProduct.save();
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
});

app.get("/taller-web-2/api/categories", async (req, res, next) => {
	try {
		const categories = await Category.find({});
		res.json(categories);
	} catch (error) {
		next(error);
	}
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});