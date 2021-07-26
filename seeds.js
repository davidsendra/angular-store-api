const mongoose = require("mongoose");
const Product = require("./models/Product");
const { Category } = require("./models/Category");

const dbUrl = "mongodb://localhost:27017/taller-web-2";

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to DB (seeds)!"))
	.catch(error => console.log(error));

const categories = [
	{
		name: "Teclados"
	},
	{
		name: "Monitores"
	},
	{
		name: "Placas de video"
	},
	{
		name: "Notebooks"
	},
	{
		name: "Auriculares"
	},
];
	
Category.deleteMany({})
	.then(() => "Deleted all categories")
	.catch(error => console.error(error));
	
Category.insertMany(categories)
	.then(() => "Added seeds categories")
	.catch(error => console.log(error));
	
// Category.find({})
// 	.then(categories => console.log(categories));

const products = [
	{
		name: "TECLADO HYPERX ALLOY FPS RGB MECANICO GAMING KAILH",
		description: "Teclado HyperX Alloy FPS RGB",
		price: 11000,
		category: "Teclados",
		urlImage: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-hyperx-alloy-fps-rgb-mecanico-gaming-kailh-0.jpg"
	},
	{
		name: "GENIUS KB-101 SMART USB BLACK",
		description: "Marca Genius, Modelo KB-101",
		price: 2000,
		category: "Teclados",
		urlImage: "https://s3-sa-east-1.amazonaws.com/peluffo/39b42091-a487-4a90-9628-15868cb7a18d.jpg"
	},
	{
		name: "Monitor Gamer Aoc C27g1 27 Full Hd 144hz",
		description: "Monitor de juegos AOC de 27 con resolución Full HD 1920 x 1080",
		price: 87000,
		category: "Monitores",
		urlImage: "https://www.techinn.com/f/13734/137349293/aoc-c27g1-lcd-27-full-hd-wled-curvo-144hz.jpg"
	},
	{
		name: "AURICULAR HYPERX CLOUD II RED BLACK",
		description: "HyperX™ Cloud II cuenta con un nuevo diseño de control de audio en una tarjeta de sonido USB que amplifica el sonido y la voz para brindarte una experiencia de juego Hi-Fi óptima, la cual te permitirá escuchar todo lo que te venías perdiendo.",
		price: 12000,
		category: "Auriculares",
		urlImage: "https://www.venex.com.ar/products_images/1534799941_1429219484957260301909173.jpg"
	},
	{
		name: "NOTEBOOK ASUS LAPTOP E410MA 128G4GW10",
		description: "Procesador Intel® Celeron® N4020; 1,1 GHz (caché de 4M; hasta 2,8 GHz). Gráficos Intel® UHD 600. Pantalla táctil, 14,0 pulgadas, HD (1366 × 768) 16:9",
		price: 83000,
		category: "Notebooks",
		urlImage: "https://www.sensei.com.ar/image/cache/catalog/A11/020NOTEB31410%202-550x550.jpg"
	}
];

Product.deleteMany({})
	.then(() => "Deleted all products")
	.catch(error => console.error(error));

Product.insertMany(products)
	.then(() => "Added seeds products")
	.catch(error => console.log(error));

// Product.find({})
// 	.then(products => console.log(products));