import axios from 'axios';

export const getProductById = (id) => {
    return async (dispatch) => {
        try{
            const { data } = axios.get(`http://localhost:3001/products/${id}`)
            console.log(data)
            return dispatch({
                type: 'GET_PRODUCT_BY_ID',
                payload: data
            })
        }catch(err) {
            console.log(err)
        }
    }
}
