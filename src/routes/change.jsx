import React from "react";
import AddProduct from "../pages/AddProduct";
import GetAddedProduct from "../components/GetAddedProduct";
import AddedProducts from "../pages/AddedProducts";



const change = {
    path: '/change',
    element: <>
    <GetAddedProduct  />
    <AddProduct datatype='added' />
</>
};

export default change;