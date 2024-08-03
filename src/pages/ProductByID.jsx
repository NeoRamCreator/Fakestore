import React, { useEffect, useState } from "react";
import getProduct from "../actions/getProduct";
import { useSelector } from "react-redux";


const ProductByID = (id) => {

    const [product, setProduct] = useState([])
    const getProductsByStore = useSelector((state) => state.fackestore.addedProducts);

    const getProductByID = async () => {

        const numId = Number(id.id);

        if (!isNaN(numId) && isFinite(numId)) {
            const getPproduct = await getProduct(id);
            setProduct(getPproduct);
        } else {
            const findProduct = getProductsByStore.find(product => product.id === id.id);
            setProduct(findProduct);
        }
    }

    useEffect(() => {
        getProductByID()
    }, [id])



    return (
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
            <h1>ProductByID </h1>
            <div style={{ display: 'flex' }}>
                <img src={product.image} alt="" style={{ maxWidth: 380, maxHeight: 500, margin: 'auto' }} />
                <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                    <p>id: {product.id}</p>
                    <p>price: {product.price}</p>
                    <p>title: {product.title}</p>
                    <p>description: {product.description}</p>
                    <p>category: {product.category}</p>
                </div>

            </div>



        </div>
    )
}
export default ProductByID