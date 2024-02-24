import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const CLEAN_PRODUCT_BY_ID = "CLEAN_PRODUCT_BY_ID";
export const FILTER_BY_MODEL = "FILTER_BY_MODEL";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_ORDER = "GET_ORDER";
export const GET_PRODUCTS_BY_CATEGORIES = "GET_PRODUCTS_BY_CATEGORIES";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export function postForm(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/create",
        payload
      );

      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export const getProductsByCategories = (category, order, page, items) => {
  return async function (dispatch) {
    try {
      let url = "http://localhost:3001/products";
      if (category || order || page || items) {
        url += "?";
        if (category) url += `category=${category}&`;
        if (order) url += `order=${order}&`;
        if (page) url += `page=${page}&`;
        if (items) url += `items=${items}&`;
        url = url.replace(/&$/, "");
      }
      console.log("URL:", url);
      const productsData = await axios.get(url);
      const products = productsData.data.data;
      console.log("melina", products);
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORIES,
        payload: products,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProducts = (
  category,
  order,
  page = "1",
  items = "6",
  model
) => {
  return async function (dispatch) {
    try {
      let url = "http://localhost:3001/products";
      if (category || order || page || items) {
        url += "?";
        if (category) url += `category=${category}&`;
        if (order) url += `order=${order}&`;
        if (page) url += `page=${page}&`;
        if (items) url += `items=${items}&`;
        if (model) url += `model=${model}&`;

        url = url.replace(/&$/, "");
      }
      console.log("URL:", url);
      const productsData = await axios.get(url);
      const products = productsData.data.data;
      console.log(products)

      // console.log("Products:", products);
      dispatch({ type: "TOTAL_PAGES", payload: productsData.data.totalPages });
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
};

export const getOrder = (order) => {
  return {
    type: GET_ORDER,
    payload: order,
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const cleanProductById = () => {
  return {
    type: CLEAN_PRODUCT_BY_ID,
    payload: {},
  };
};
export const filterByModel = (model) => {
  console.log(model);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/model?model=${model}`
      );
      console.log(data);
      return dispatch({
        type: FILTER_BY_MODEL,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
// export const addToCart = ({id}) => {
//     console.log(id)
//     return async (dispatch) => {
//         try {
//           const { data } = await axios.get(`http://localhost:3001/products/${id}`);
//           console.log(data);
//           return dispatch({
//             type: ADD_TO_CART,
//             payload: data,
//           });
//         } catch (err) {
//           console.log(err);
//         }
//       };
//     };
export const addToCart = ({id}) => {
  console.log(id)
  return{
    type: ADD_TO_CART,
    payload: id
  }
}

export const removeFromCart = (id) => {
  console.log(id)
  return{
    type: REMOVE_ALL_FROM_CART,
    payload: id
  }
}

// export const removeFromCart = (id, all=false) => {
//   console.log(id.id,all.all)
  
// }

export const clearCart = () => ({type: CLEAR_CART}) 

// return all
    // ? { type: REMOVE_ALL_FROM_CART, payload: id }
//     : { type: REMOVE_ONE_FROM_CART, payload: id };