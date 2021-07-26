const Joi = require("joi");

module.exports = Joi.object({
	name: Joi.string().required(),
	description: Joi.string().required(),
	price: Joi.number().required().min(0),
	category: Joi.string().required(),
	urlImage: Joi.string().required().pattern(/^(http(s?):\/\/.*\.(?:png|jpg))$/),
	userEmail: Joi.string().valid(process.env.ADMIN).required()
		.error( error => {
			error[0].message = "401: Unauthorized user";
			return error;
		})
});