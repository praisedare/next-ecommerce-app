const fs = require('node:fs');
const basePath = require('#basePath');


/**
 * Insert fake products into DB
 * @param {number} count The number of products to insert
 */
async function ProductsSeeder(count = 20) {
	const { faker } = await import('@faker-js/faker');
	const commerce = faker.commerce;

	const products = [];
    loadImageNames();

	for (let i = 0; i < count; i++)
		products.push(makeProduct());

	await Product.insertMany(products);

	function makeProduct() {
		return {
			name: commerce.product(),
			sku: faker.random.alphaNumeric(10).toUpperCase(),
			price: faker.datatype.number(500) + 20,
			image: 'images/products/' + images[faker.datatype.number(0, images.length - 1)],
		}
	};

	return products;
}

const Product = require('../models/Product');

module.exports = ProductsSeeder;

var images = [];

function loadImageNames() {
    if (images.length)
        return images;
    images = fs.readdirSync(`${basePath}/public/images/products`);
    return images;
}

