const {default: mongoose} = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', true);

const mongoDBConnect = async () => {

	const db = process.env.MONGODB_DB,
		uri = process.env.MONGODB_URI;

	mongoose.connect(`${ uri }/${ db }`);
}

module.exports = mongoDBConnect;
