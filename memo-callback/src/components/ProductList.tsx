import { useCallback, useState } from "react";
import GetProductsButton from "./GetProductsButton";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(async () => {
        console.log('fetchProducts')

        try {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json()
            setProducts(result.products)
        } catch (error) {
            console.error(error)
        }
    }, []) 

    return <>
        <GetProductsButton fetchProducts={fetchProducts} />
        <ul>
            {
                products.map((product: any) => (
                    <li key={product.id}>{product.title}</li>
                ))
            }
        </ul>
    </>
}

export default ProductList;