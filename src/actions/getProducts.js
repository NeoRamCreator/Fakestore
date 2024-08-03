import { httpQuery } from "./http";


const getProducts = async (numberOfCards) => {
    if (numberOfCards > 0) {
        return await httpQuery(`https://fakestoreapi.com/products?limit=${numberOfCards}`)
    }
    else {
        return await httpQuery(`https://fakestoreapi.com/products`)
    }
}

export default getProducts;