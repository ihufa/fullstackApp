import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let initialState = {}
let userData = localStorage.getItem("userData")
if (userData !== null) {
    userData = JSON.parse(userData)
    initialState = { items: { userData } }
}
console.log(userData)

const middleWare = [thunk]
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store 