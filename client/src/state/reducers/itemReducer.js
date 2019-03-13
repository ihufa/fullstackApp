import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USERS_LOADING,
  INITIATE_USER,
  CLEAR_USER,
  INVALID_LOGIN,
  UPDATE_PRODUCTS,
  PRODUCT_SEARCH
} from "../actions/types"

const initialState = {
  itemArray: [],
  userData: "",
  userCreated: false,
  invalidLogin: false,
  products: [],
  productSearch: ""
}

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        itemArray: action.payload,
        loading: false
      }
    case ADD_USER:
      return {
        ...state,
        userCreated: action.payload,
        invalidLogin: false
      }
    case DELETE_USER:
      return {
        ...state,
        itemArray: state.itemArray.filter(item => item._id !== action.payload)
      }
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      }
    case INITIATE_USER:
      return {
        ...state,
        userData: action.payload
      }
    case CLEAR_USER:
      return {
        ...state,
        userData: ""
      }
    case INVALID_LOGIN:
      return {
        ...state,
        invalidLogin: action.payload
      }
    case UPDATE_PRODUCTS:
      console.log("products updated", action.payload)
      return {
        ...state,
        products: action.payload
      }
    case PRODUCT_SEARCH:
      return {
        ...state,
        productSearch: action.payload
      }

    default:
      return state
  }
}
