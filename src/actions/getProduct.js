import { httpQuery } from "./http";


const getProduct = async ({id}) => {
    return await httpQuery(`https://fakestoreapi.com/products/${id}`)
}

export default getProduct;