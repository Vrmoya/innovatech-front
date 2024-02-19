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

// export const getProducts = () => {
//     return async function (dispatch) {
//         try {
//             const productsData = await axios.get('http://localhost:3001/products');

//             const products = productsData.data;
//             dispatch({type: GET_PRODUCTS, payload: products})
//         } catch (error) {
//             console.log(error);
//         }
       
//     }
// }

export const getProducts = (category, order, page, items) => {
    return async function (dispatch) {
        try {
            let url = 'http://localhost:3001/products';
            if (category || order || page || items) {
                url += '?';
                if (category) url += `category=${category}&`;
                if (order) url += `order=${order}&`;
                if (page) url += `page=${page}&`;
                if (items) url += `items=${items}&`;

                url = url.replace(/&$/, '');
            }
            console.log("URL:", url);
            const productsData = await axios.get(url);

            const products = productsData.data;
            // console.log("Products:", products);
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
