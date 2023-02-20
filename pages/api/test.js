import Product from "@/app/seeders/models/Product"

export default function handler(req, res) {
	const products = Product.find();
	res.status(200).json(products);
}

