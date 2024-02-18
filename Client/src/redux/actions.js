import axios from 'axios';

export function postForm(payload){
    return async function (dispatch){
    try{
        const response= await axios.post("http://localhost:3001/create", payload); //corregir ésto!!!!!!!!!!!!!
      
        console.log(response)
        return response;     
    }catch (error) {
        console.log(error)
    }
}
};
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

export const getProducts = () => {
    return async function (dispatch) {
        try {
            const productsData = await axios.get('http://localhost:3001/products');

            const products = productsData.data;
            dispatch({type: GET_PRODUCTS, payload: products})
        } catch (error) {
            console.log(error);
        }
       
    }
}

export const getProductById = (id) => {
    console.log(id)
    return async (dispatch) => {
        try{
            const { data } = await axios.get(`http://localhost:3001/products/${id}`)
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
