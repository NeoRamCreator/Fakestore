import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editNumberOfCards } from "../features/fackestore/fackestoreSlice";

import getProducts from "../actions/getProducts";
import ProductCard from "../components/ProductCard";


const AddedProducts = ({ datatype }) => {
    const [products, setProducts] = useState([])


    const numberOfCards = useSelector((state) => state.fackestore.numberOfCards);
    const getProductsByStore = useSelector((state) => state.fackestore.addedProducts);
    const dispatch = useDispatch()

    const handleChangeNumberOfCards = (e) => {
        dispatch(editNumberOfCards(e.target.value))
    }

    const getButtonClass = (value) => {
        return numberOfCards === value ? 'active' : '';
    };

    const getProductsArr = async () => {
        if (datatype === 'api') {
            const products = await getProducts(numberOfCards)
            setProducts(products)
        }
        if (datatype === 'added') {
            setProducts(getProductsByStore)
        }

    }

    useEffect(() => {
        getProductsArr()
    }, [numberOfCards, getProductsByStore, datatype])



    return (
        <div>
            <h1>Products:  {numberOfCards > 0 ? numberOfCards + 'шт' : 'Все'}</h1>
            <button className={getButtonClass(8)} value={8} onClick={e => handleChangeNumberOfCards(e)}>8</button>
            <button className={getButtonClass(16)} value={16} onClick={e => handleChangeNumberOfCards(e)}>16</button>
            <button className={getButtonClass(-1)} value={-1} onClick={e => handleChangeNumberOfCards(e)}>все</button>

            <div className="cards">
                {products.length > 0 && (
                    products.map(product => <ProductCard key={product.id} product={product} />)
                )}
                {products.length == 0 && (
                    <h3>нет данных</h3>
                )}
            </div>

        </div>
    )
}
export default AddedProducts