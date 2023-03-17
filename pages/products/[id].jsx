import Image from 'next/image';
import Product from "@/app/models/Product";
import { makeSerializable } from "@/app/lib/functions";
import basePath from '#basePath';

console.log('basePath', basePath);
const ProductDetailsPage = ({product}) => {
    console.log('product', product);
    return <>
        <h1>{product.name}</h1>
        <Image src={`/${product.image}`} width="400" height="200" />
    </>
}

export async function getServerSideProps(context) {
    const {params} = context;

    const id = params.id;

    const product = makeSerializable(await Product.findById(id));

    return {
        props: {
            product,
        }
    }
}

export default ProductDetailsPage
