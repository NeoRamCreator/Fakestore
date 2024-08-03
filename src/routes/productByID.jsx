import React from "react";
import { useParams } from "react-router-dom"; 
import ProductByID from "../pages/ProductByID";

const ProductByIDRoute = () => {
    const  {id}  = useParams(); 
    return (
        <ProductByID id={id} />
    );
};

const productByID = {
    path: '/products/:id',
    element: <ProductByIDRoute />
};

export default productByID;

