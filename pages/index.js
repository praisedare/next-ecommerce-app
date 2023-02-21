import {makeSerializable} from "@/app/lib/functions";
import Product from "@/app/models/Product";

function IndexPage({ products }) {
	return <>
		<h1>Next Store</h1>
		<ul>
			{
				products.map(product => (
					<li key={product.id}>{product.name}</li>
				))
			}
		</ul>
	</>;
}

export async function getServerSideProps() {
	const products = Array.from(
		await Product.find({}, null, {limit: 10})
	).map(makeSerializable);

	return {
		props: {
			products,
		},
	};
}

export default IndexPage
