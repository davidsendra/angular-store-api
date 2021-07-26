const mongoose = require("mongoose");
const { validateCategory } = require("./Category");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	category: {
		type: String,
		required: true,
		trim: true,
		validate: validateCategory
	},
	urlImage: {
		type: String,
		required: true,
		trim: true,
		match: [
			/^(http(s?):\/\/.*\.(?:png|jpg))$/,
			"Not a valid URL, only .png or .jpg extensions allowed"
		]
	}
});

productSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;