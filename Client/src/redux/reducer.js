import {
  CLEAN_PRODUCT_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  FILTER_BY_MODEL,
  GET_CATEGORIES,
  GET_ORDER,
  GET_PRODUCTS_BY_CATEGORIES,
  CHANGE_FORM,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  INJECT_CART_DATA,
  PAYMENT_ID,
} from "./actions";

const initialState = {
  //Variables de producto, podría juntarse todo en un objeto
  products: [],
  categories: null,
  order: null,
  model: null,
  totalpages: null,
  pagenumber: "1",
  //******* */
  getProductById: {},
  filterByCategories: [],
  currentForm: "login",
  user: null,
  error: null,
  cart: [],
  paymentID: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_ID:
      return {
        ...state,
        paymentID: action.payload
      }
    case CHANGE_FORM:
      console.log("Changing form in reducer to:", action.payload);
      return {
        ...state,
        currentForm: action.payload,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        filterByCategories: action.payload,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload, // laptop, smarthphone,
        pagenumber: "1",
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload, // none // Price: Low to high // Price: High to low
        pagenumber: "1",
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        getProductById: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        getProductById: action.payload,
      };
    case CLEAN_PRODUCT_BY_ID:
      return {
        ...state,
        getProductById: action.payload,
      };
    case FILTER_BY_MODEL:
      return {
        ...state,
        products: action.payload,
      };
    case "CHANGE_MODEL":
      return {
        ...state,
        model: action.payload,
        pagenumber: "1",
      };

    case "SET_PAGE":
      return { ...state, pagenumber: action.payload };
    case "TOTAL_PAGES":
      return {
        ...state,
        totalpages: action.payload,
      };

    case SIGN_IN_SUCCESS:
      return { ...state, user: action.payload.user, error: null };

    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };

    case SIGN_UP_SUCCESS:
      return { ...state, user: action.payload.user, error: null };

    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload };

    case ADD_TO_CART:
      const productFound = state.cart.find(
        (product) => product.id == action.payload
      );
      if (productFound) {
        const updatedCart = state.cart.map((product) =>
          product.id == action.payload
            ? {
                ...product,
                quantity: product.quantity + 1,
                total: product.price * (product.quantity + 1),
              }
            : product
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const productToAdd = state.products.find(
        (product) => product.id == action.payload
      );
      if (productToAdd) {
        const updatedProduct = {
          ...productToAdd,
          quantity: 1,
          total: productToAdd.price,
        };
        return {
          ...state,
          cart: [...state.cart, updatedProduct],
        };
      }
    case REMOVE_ALL_FROM_CART:
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case REMOVE_ONE_FROM_CART:
      const productToRemove = state.cart.find(
        (product) => product.id === action.payload
      );
      if (productToRemove && productToRemove.quantity > 1) {
        const updatedCart = state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity - 1,
                total: product.price * (product.quantity - 1),
              }
            : product
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else if (productToRemove.quantity === 1) {
        const updatedCart = state.cart.filter(
          (product) => product.id !== productToRemove.id
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
    case INJECT_CART_DATA:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
