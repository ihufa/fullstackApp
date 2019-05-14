import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USERS_LOADING,
  INITIATE_USER,
  CLEAR_USER,
  INVALID_LOGIN,
  UPDATE_PRODUCTS,
  UPDATE_USER_PRODUCTS,
  UPDATE_BROWSED_USER_PRODUCTS,
  PRODUCT_MENU_TOGGLE,
  REMOVE_PRODUCT,
  TOGGLE_HIDE_PRODUCT,
  CHANGE_EMAIL,
  CHANGE_ZIP,
  CONCAT_PRODUCTS,
  TOGGLE_PRODUCTS_LOADING
} from "../actions/types"

const initialState = {
  itemArray: [],
  userData: "",
  userCreated: false,
  invalidLogin: false,
  products: [],
  browsedUserProducts: [],
  userProducts: [],
  productsLoading: false
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

    case CHANGE_EMAIL:
      let newUserDataEmail = { ...state.userData, userEmail: action.payload }
      return {
        ...state,
        userData: newUserDataEmail
      }
    case CHANGE_ZIP:
      let newUserDataZip = {
        ...state.userData,
        userZip: action.payload.newZip,
        userCity: action.payload.newCity
      }
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
      return {
        ...state,
        products: action.payload,
        productsLoading: false
      }
    case TOGGLE_PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: true
      }
    case CONCAT_PRODUCTS:
      let concattedProd = state.products.concat(action.payload)
      let loading = action.payload.length === 0 ? true : false
      return {
        ...state,
        products: concattedProd,
        productsLoading: loading
      }

    case UPDATE_BROWSED_USER_PRODUCTS:
      return {
        ...state,
        browsedUserProducts: action.payload
      }
    case UPDATE_USER_PRODUCTS:
      return {
        ...state,
        userProducts: action.payload
      }

    case PRODUCT_MENU_TOGGLE:
      let index = state.userProducts
        .map(prod => prod._id)
        .indexOf(action.payload) // find index of product to toggle
      let newProd = state.userProducts.map((item, idx) => {
        // create new array without mutating
        if (idx !== index) {
          return item
        }
        return {
          ...item,
          toggleMenu: !state.userProducts[index].toggleMenu
        }
      })
      return {
        ...state,
        userProducts: newProd
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          item => item._id !== action.payload
        )
      }

    case TOGGLE_HIDE_PRODUCT:
      let index1 = state.userProducts
        .map(prod => prod._id)
        .indexOf(action.payload) // find index of product to toggle
      let newProd1 = state.userProducts.map((item, idx) => {
        // create new array without mutating
        if (idx !== index1) {
          return item
        }
        return {
          ...item,
          hidden: !state.userProducts[index1].hidden,
          toggleMenu: false
        }
      })
      return {
        ...state,
        userProducts: newProd1
      }

    default:
      return {
        ...state
      }
  }
}
