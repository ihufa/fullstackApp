import { combineReducers } from "redux"
import itemReducer from "./itemReducer"
import modalReducer from "./modalReducer"
import swapReducer from './swapReducer'

export default combineReducers({
  items: itemReducer,
  modals: modalReducer,
  swaps: swapReducer
})
