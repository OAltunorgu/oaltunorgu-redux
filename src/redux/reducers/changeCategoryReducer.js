import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

//State'de başlangıç değerimiz initialState altındaki currentCategory'de ne var ise o olsun.
export default function changeCategoryReducer(state = initialState.currentCategory, action) {

    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}