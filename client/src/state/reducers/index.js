import { combineReducers } from "redux"
import itemReducer from "./itemReducer"
import modalReducer from "./modalReducer"

export default combineReducers({
  items: itemReducer,
  modals: modalReducer
})
