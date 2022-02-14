import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"

const rootReducer = combineReducers({
    // Eski yazım
    // changeCategoryReducer: changeCategoryReducer
    changeCategoryReducer,
    categoryListReducer,
    productListReducer

})

export default rootReducer;