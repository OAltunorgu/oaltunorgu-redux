import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

//State'de başlangıç değerimiz initialState altındaki currentCategory'de ne var ise o olsun.
export default function productListReducer(state = initialState.products, action) {

    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}