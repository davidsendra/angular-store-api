/* eslint-disable indent */
module.exports = (error, req, res, next) => {
	console.error(error);

	switch (error.name) {
		case "CastError":
			res.status(400).send({ error: "ID is malformed" });
			break;

		case "ValidationError":
			res.status(400).send({ error: "Invalid category" });
			break;
		
		default:
			res.status(500).end();
			break;
	}
};