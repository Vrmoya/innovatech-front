import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const CLEAN_PRODUCT_BY_ID = 'CLEAN_PRODUCT_BY_ID';
export const FILTER_BY_MODEL = 'FILTER_BY_MODEL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ORDER = 'GET_ORDER'
export const GET_PRODUCTS_BY_CATEGORIES = 'GET_PRODUCTS_BY_CATEGORIES';
export const CHANGE_FORM = 'CHANGE_FORM';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'
export const BASE_URL = 'http://localhost:80';
export const PAYMENT_ID = 'PAYMENT_ID';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART,';
export const INJECT_CART_DATA = 'INJECT_CART_DATA'
export const LOGOUT = 'LOGOUT';
export const INJECT_USER = 'INJECT_USER';
export const SHOW_SHOPPING_CART = 'SHOW_SHOPPING_CART';
export const SET_RECOVERY_MODE = 'SET_RECOVERY_MODE';

export const showShoppingCart = (data) => {
  return {
    type: SHOW_SHOPPING_CART,
    payload: data
  }
}

export const injectUser = (data) => {
  return {
    type: INJECT_USER,
    payload: data
  }
}

export const logout = () => {
  window.localStorage.setItem('user', JSON.stringify(null))
  return{
    type: LOGOUT,
  }

};

export function paymentGateway(cart) {
  // console.log(cart);
  return async function (dispatch) {
    try {

      const items = cart.map((prod) => ({
        title: prod.model,
        price: parseFloat(prod.price),
        quantity: parseInt(prod.quantity),
      }));

      const total = cart.map((prod) => prod.total)
      let totalPrice = 0;

      for (let i = 0; i < total.length; i++) {
        totalPrice += total[i];
      }

      const response = await axios.post("http://localhost:80/create_preference", {
        items: items,
        total: totalPrice
      })

      const { id } = response.data;
      dispatch({ type: PAYMENT_ID, payload: id })
    } catch (error) {
      console.log(error);
    }
  }
}
export function getInfoGithub(codigoGithub) {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:80/get/github/"+codigoGithub)
      console.log(response.data);
      window.localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({ type: "GET_INFO_GITHUB", payload: response.data })
    }catch (error) {
      console.log(error);
    }
}
}

export function getInfoGoogle(codigoGoogle) {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:80/get/google/"+codigoGoogle)
      // console.log(response.data);
      window.localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({ type: "GET_INFO_GOOGLE", payload: response.data })
    }catch (error) {
      console.log(error);
    }
}
}


export const LoginAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`${BASE_URL}/api/signin`, { email, password });
      console.log(data);
      window.localStorage.setItem('user', JSON.stringify(data))
      dispatch({ type: SIGN_IN_SUCCESS, payload: data});
    } catch (error) {
      dispatch({ type: SIGN_IN_FAILURE, payload: error });
    }
  };
};

export const signUpAction = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/signup`, { name, email, password });
      dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SIGN_UP_FAILURE, payload: error });
    }
  };
};

export function postForm(payload) {
  return async function () {
    try {
      const response = await axios.post("http://localhost:80/create", payload);

      // console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export const getProductsByCategories = (category, order, page, items) => {
  return async function (dispatch) {
    try {
      let url = "http://localhost:80/products";
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
      let url = "http://localhost:80/products";
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
      const { data } = await axios.get(`http://localhost:80/products/${id}`);
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
        `http://localhost:80/model?model=${model}`
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

export const addToCart = (id) => {
  console.log('add to cart', id)
  return {
    type: ADD_TO_CART,
    payload: id
  }
}
export const removeOneFromCart = (id) => {
  console.log('remove one to cart', id)
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id
  }
}

export const removeFromCart = (id) => {
  console.log(id)
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: id
  }
}
export const injectCartData = (data) => {
  return {
    type: INJECT_CART_DATA,
    payload: data
  }
}

// Recuperacion de contraseña

export function changeForm(formType) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_FORM,
      payload: formType,
    });

    if (formType === 'recovery') {
      dispatch({ type: 'SET_RECOVERY_MODE', payload: true });
    } else {
      dispatch({ type: 'SET_RECOVERY_MODE', payload: false });
    }
  };
}


export const recoverPasswordAction = (email) => {
  return async (dispatch) => {
    try {
      // Llama a tu API para solicitar la recuperación de contraseña
      const response = await fetch('http://localhost:5173/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      // Maneja la respuesta del servidor
      if (response.ok) {
        // Puedes realizar acciones adicionales aquí después de un éxito
        console.log('Password recovery email sent successfully');
        dispatch(recoverPasswordSuccess()); // Puedes despachar otra acción si es necesario
      } else {
        console.error('Failed to recover password. Server response:', response.statusText);
        dispatch(recoverPasswordFailure()); // Puedes despachar otra acción si es necesario
      }
    } catch (error) {
      console.error('Error recovering password:', error);
      dispatch(recoverPasswordFailure()); // Puedes despachar otra acción si es necesario
    }
  };
};

// Acciones de éxito y fracaso
const recoverPasswordSuccess = () => ({ type: 'RECOVER_PASSWORD_SUCCESS' });
const recoverPasswordFailure = () => ({ type: 'RECOVER_PASSWORD_FAILURE' });
