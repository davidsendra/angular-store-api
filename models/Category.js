const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

categorySchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

const Category = mongoose.model("Category", categorySchema);

const validateCategory = async (category) => {
	return await Category.findOne({ name: category });
};

module.exports = {
	Category: Category,
	validateCategory: validateCategory
};