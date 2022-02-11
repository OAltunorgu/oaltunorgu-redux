import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"

const rootReducer = combineReducers({
    // Eski yazım
    // changeCategoryReducer: changeCategoryReducer
    changeCategoryReducer,
    categoryListReducer
})

export default rootReducer;