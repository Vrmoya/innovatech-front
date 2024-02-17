import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

export const getProducts = () => {
    return async function (dispatch) {
        const productsData = await axios.get('http://localhost:3001/products');

        const products = productsData.data;
        dispatch({type: GET_PRODUCTS, payload: products})
    }
}

export const getProductById = (id) => {
    return async (dispatch) => {
        try{
            const { data } = axios.get(`http://localhost:3001/products/${id}`)
            console.log(data)
            return dispatch({
                type: GET_PRODUCT_BY_ID,
                payload: data
            })
        }catch(err) {
            console.log(err)
        }
    }
}
