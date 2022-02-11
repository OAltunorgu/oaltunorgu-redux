import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"

const rootReducer = combineReducers({
    // Eski yazım
    // changeCategoryReducer: changeCategoryReducer
    changeCategoryReducer
})

export default rootReducer;