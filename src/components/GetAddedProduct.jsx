import React, { useRef, useState } from "react";


import { getChageProduct } from "../features/fackestore/fackestoreSlice";
import { useDispatch, useSelector } from "react-redux";


const GetAddedProduct = () => {
    const [inputValue, setInputValue] = useState('')
    const [product, setProduct] = useState('')


    const dispatch = useDispatch();

    const addedProduct = useSelector(state => state.fackestore.changeProdect)


    const handleGetProduct = () => {
        dispatch(getChageProduct(inputValue));
        setProduct(product)
    };

    const handleChangeValue = e => {
        setInputValue(e.target.value)
    }


    return (
        <>
            <button style={{
                color: 'black',
                padding: '10px 20px'
            }} onClick={() => handleGetProduct()}>получить продукт с ID: </button>
            <input placeholder="например, qwe" value={inputValue} onChange={e => handleChangeValue(e)} style={styles.input} type="text" />
            {addedProduct && (<div>выбран для изменения продукт с ID: {addedProduct?.id}</div>)}
        </>

    );

}


const styles = {
    input: {
        background: '#212121FF',
        padding: '10px 20px',
        borderRadius: 4,
        border: '1px solid #45464FFF',
        fontSize: 20,
        marginBottom: 10,
    }
}

export default GetAddedProduct;





