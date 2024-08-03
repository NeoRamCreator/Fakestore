import React from 'react';
import { Navigate } from 'react-router-dom';
import products from './products';
import addedProducts from './addedProducts';
import productByID from './productByID';
import Error from '../pages/Error';
import Main from '../pages/Main';
import addNewProduct from './addNewProduct';
import change from './change';

const routes = [
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Navigate to="/products-api" replace />
            },

           
            products,
            productByID,
            addedProducts,
            addNewProduct,
            change
         


        ]
    }
];





export default routes;