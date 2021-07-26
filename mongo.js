const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_DB_URL;

mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
})
	.then(() => console.log("Database connected!"))
	.catch(error => console.error(error));