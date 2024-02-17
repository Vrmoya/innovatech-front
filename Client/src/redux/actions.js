import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
    return async function (dispatch) {
        const productsData = await axios.get('http://localhost:3001/products');

        const products = productsData.data;
        dispatch({type: GET_PRODUCTS, payload: products})
    }
}