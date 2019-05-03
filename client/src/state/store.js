import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

let initialState = {}
let userData = localStorage.getItem("userData")
if (userData !== null) {
  userData = JSON.parse(userData)
  initialState = { items: { userData } }
}
console.log(userData)
const middleWare = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(...middleWare))
const store = createStore(rootReducer, initialState, enhancer)
export default store
