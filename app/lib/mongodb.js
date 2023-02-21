const {default: mongoose} = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', true);

const mongoDBConnect = async () => {

	const db = process.env.MONGODB_DB,
		uri = process.env.MONGODB_URI;

	mongoose.connect(`${ uri }/${ db }`);
}

mongoose.model.prototype.toJSON = function() {
	let data = {};
	for (let prop in this)
		data[prop] = this[prop].toString();

	return data;
}

module.exports = mongoDBConnect;
