const productSchema = require("../joiSchemas");

module.exports = (req, res, next) => {
	const { error } = productSchema.validate(req.body);
	if (error) {
		const msg = error.details.map(element => element.message).join(",");
		res.status(400).send(msg);
	} else {
		next();
	}
};