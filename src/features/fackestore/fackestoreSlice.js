import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    numberOfCards: 8,
    addedProducts: [
        {
            id: 'qwe',
            title: 'title1',
            price: '12',
            category: 'category1',
            description: 'description1',
            image: 'https://i.pinimg.com/236x/52/af/bf/52afbfeb6294f24e715a00367be3cdf3.jpg'
        }
    ],
    changeProdect: null
};

export const fackestoreSlice = createSlice({
    name: 'fackestore',
    initialState,
    reducers: {

        editNumberOfCards: (state, actions) => {
            state.numberOfCards = +actions.payload
        },
        addProduct: (state, actions) => {
            state.addedProducts = [...state.addedProducts, actions.payload];
        },
        getChageProduct: (state, actions) => {
            state.changeProdect = state.addedProducts.find(product => product.id === actions.payload);
        },
        editProduct: (state, action) => {
            // const { id, title, price, category, description, image } = action.payload;
            const { id, ...updates } = action.payload;
            const isUpdates = Object.entries(updates).reduce((acc, [key, value]) => {
                if (value !== "" && value !== null && value !== undefined) {
                    acc[key] = value;
                }
                return acc;
            }, {});
            const productIndex = state.addedProducts.findIndex(product => product.id === id);
            if (productIndex !== -1) {
                state.addedProducts[productIndex] = { ...state.addedProducts[productIndex], ...isUpdates };
            }
        }
    }
});

export const { editNumberOfCards, addProduct, getChageProduct, editProduct } = fackestoreSlice.actions;
export default fackestoreSlice.reducer;
