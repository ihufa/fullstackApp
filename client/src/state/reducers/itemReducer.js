import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USERS_LOADING,
  INITIATE_USER,
  CLEAR_USER,
  INVALID_LOGIN,
  UPDATE_PRODUCTS,
  PRODUCT_SEARCH,
  PRODUCT_MENU_TOGGLE,
  REMOVE_PRODUCT,
  TOGGLE_HIDE_PRODUCT,
  CHANGE_EMAIL,
  CHANGE_ZIP
} from "../actions/types"

const initialState = {
  itemArray: [],
  userData: "",
  userCreated: false,
  invalidLogin: false,
  products: [],
  productSearch: "",
}

export default function (state = initialState, action) {
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

    case CHANGE_EMAIL:
      let newUserDataEmail = { ...state.userData, userEmail: action.payload }
      return {
        ...state,
        userData: newUserDataEmail
      }
    case CHANGE_ZIP:
      let newUserDataZip = { ...state.userData, userZip: action.payload }
      return {
        ...state,
        userData: newUserDataZip
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

    case PRODUCT_MENU_TOGGLE:
      let index = state.products.map(prod => prod._id).indexOf(action.payload)    // find index of product to toggle
      let newProd = state.products.map((item, idx) => {                           // create new array without mutating
        if (idx !== index) { return item }
        return {
          ...item,
          toggleMenu: !state.products[index].toggleMenu
        }
      })
      return {
        ...state,
        products: newProd
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item._id !== action.payload)
      }

    case TOGGLE_HIDE_PRODUCT:
      let index1 = state.products.map(prod => prod._id).indexOf(action.payload)    // find index of product to toggle
      let newProd1 = state.products.map((item, idx) => {                           // create new array without mutating
        if (idx !== index1) { return item }
        return {
          ...item,
          hidden: !state.products[index1].hidden,
          toggleMenu: false
        }
      })
      return {
        ...state,
        products: newProd1
      }

    default:
      return state
  }
}
