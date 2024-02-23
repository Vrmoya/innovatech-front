import {
  CLEAN_PRODUCT_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  FILTER_BY_MODEL,
  GET_CATEGORIES,
  GET_ORDER,
  GET_PRODUCTS_BY_CATEGORIES,
  PAYMENT_ID,
} from "./actions";

const initialState = {
  //Variables de producto, podría juntarse todo en un objeto
  products: [],
  categories: null,
  order: null,
  model: null,
  totalpages: null,
  pagenumber: '1',
  //******* */
  getProductById: {},
  filterByCategories: [],
  paymentID: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_ID:
      return {
        ...state,
        paymentID: action.payload
      }

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        filterByCategories: action.payload
      }

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload, // laptop, smarthphone,
        pagenumber: '1'
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload, // none // Price: Low to high // Price: High to low
        pagenumber: '1'
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
    case 'CHANGE_MODEL':
      return {
        ...state,
        model: action.payload,
        pagenumber: '1'
      }

    case 'SET_PAGE':
      return { ...state, pagenumber: action.payload }
    case 'TOTAL_PAGES':
      return {
        ...state,
        totalpages: action.payload
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
