import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/fackestore/fackestoreSlice";
import { getChageProduct, editProduct } from "../features/fackestore/fackestoreSlice";
import {  useLocation } from 'react-router-dom';



const AddProduct = () => {
    const [message, setMessage] = useState({ show: false, message: 'Успешно' })
    const [product, setProduct] = useState(null)
    const addedProduct = useSelector(state => state.fackestore.changeProdect)
    const location = useLocation();
    

    const [newProduct, setNewProduct] = useState({
        id: product?.id || "",
        title: product?.title ||  "",
        price: '',
        category: '',
        description: '',
        image: 'https://i.pinimg.com/236x/52/af/bf/52afbfeb6294f24e715a00367be3cdf3.jpg'
    });




    useEffect(() => {
        setProduct(addedProduct)
    }, [addedProduct])


    const form = useRef(null);

    const dispatch = useDispatch()

    const handleChangeNumberOfCards = () => {
        dispatch(addProduct(newProduct))
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        if (addedProduct) {
            const changeProduct = { ...newProduct, id: addedProduct.id }
            dispatch(editProduct(changeProduct))
        } else {

            handleChangeNumberOfCards()
        }

        setMessage(prev => ({
            ...prev, show: true
        }))
        dispatch(getChageProduct(null))
    }

    const handleChangeForm = (e) => {
        setMessage(prev => ({
            ...prev, show: false
        }))


        const { name, value } = e.target;
        setNewProduct(prevProduct => ({
            ...prevProduct,
            [name]: name === 'id' ? (value) : value
        }));
    }



    return (
        <div style={{
            display: "flex",
            flexDirection: 'column'
        }}>
            <h2 className="active">
                {message.show && message.message}

            </h2>

            {(location.pathname !== '/change' || location.pathname === '/change' && addedProduct) && (
                <div
                    style={{
                        maxWidth: '80%',
                        minWidth: '50%',
                        margin: 'auto',
                        display: 'flex',
                        background: '#1E1F1CFF',
                        padding: '15px',
                        flexDirection: 'column',
                    }}>
                    <form ref={form} action="" onSubmit={handleSubmit} style={{
                        display: "flex",
                        flexDirection: 'column',
                    }}>
                             <>
                                <input placeholder="id" style={styles.input} type="text" name="id" id="id" onChange={handleChangeForm} />
                                <input value={newProduct.title} placeholder="title" style={styles.input} type="text" name="title" id="title" onChange={handleChangeForm} />
                                <input placeholder="price" style={styles.input} type="text" name="price" id="price" onChange={handleChangeForm} />
                                <input placeholder="category" style={styles.input} type="text" name="category" id="category" onChange={handleChangeForm} />
                                <textarea style={styles.input} placeholder="description" name="description" id="description" cols={30} rows={10} onChange={handleChangeForm}></textarea>
                                <input placeholder="image, пример: https://i.pinimg.com/236x/52/af/bf/52afbfeb6294f24e715a00367be3cdf3.jpg" style={styles.input} type="text" name="image" id="image" onChange={handleChangeForm} />
                                <button style={{ ...styles.input, marginTop: 30 }} type="submit">{addedProduct ?  'Изменить': "Добавить"}</button>
                            </>
                            
                    </form>

                </div>
            )}
        </div>
    )

};

export default AddProduct;

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



