const {default: mongoose} = require("mongoose");
require('dotenv').config();

const schema = mongoose.Schema({
	name: String,
	sku: {
		type: 'string',
		required: true,
	}
});

const Product = mongoose.model('Product', schema);
module.exports = Product;

