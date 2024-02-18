import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./actions";

const initialState = {
    products: [],
    getProductById: {},
    productDetailExist: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, products: action.payload}
            case GET_PRODUCT_BY_ID:
                return {
                    ...state,
                    getProductById: action.payload,
                    productDetailExist: true
                }

        default:
            return {...state}
    }
}

export default rootReducer;