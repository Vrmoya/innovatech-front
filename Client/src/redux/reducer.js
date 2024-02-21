import {
  CLEAN_PRODUCT_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  FILTER_BY_MODEL,
  GET_CATEGORIES,
  GET_ORDER,
  GET_PRODUCTS_BY_CATEGORIES,
} from "./actions";

const initialState = {
  products: [],
  getProductById: {},
  categories: null,
  order: null,
  filterByCategories: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case GET_PRODUCTS_BY_CATEGORIES:
        return{
          ...state,
          filterByCategories: action.payload
        }

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload, // laptop, smarthphone,
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload, // none // Price: Low to high // Price: High to low
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
    default:
      return { ...state };
  }
};

export default rootReducer;
