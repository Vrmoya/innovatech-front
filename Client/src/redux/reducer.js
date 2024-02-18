import { CLEAN_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./actions";

const initialState = {
    products: [],
    getProductById: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, products: action.payload}
            case GET_PRODUCT_BY_ID:
                return {
                    ...state,
                    getProductById: action.payload
                }
                case CLEAN_PRODUCT_BY_ID:
                    return{
                        ...state,
                        getProductById: action.payload
                    }

        default:
            return {...state}
    }
}

export default rootReducer;