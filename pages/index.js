import {makeSerializable} from "@/app/lib/functions";
import Product from "@/app/models/Product";
import Link from "next/link";

function IndexPage({ products }) {
    console.log('product one', products[0]);
    const productsListing = products ?
        (
            <ul>
                {
                    products.map(product => (
                        <li key={product._id}>
                            <Link href={`/products/${product._id}`}>{product.name}</Link>
                        </li>
                    ))
                }
            </ul>
        ) : (
            <h2>No Products</h2>
        );

    return <>
        { productsListing }
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
