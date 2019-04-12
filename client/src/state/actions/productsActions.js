import { UPDATE_PRODUCTS, PRODUCT_SEARCH, PRODUCT_MENU_TOGGLE, REMOVE_PRODUCT, TOGGLE_HIDE_PRODUCT, OPEN_MODAL } from "./types"
import axios from "axios"

export const getProducts = () => dispatch => {
  console.log("getProducts...")
  axios
    .get("/products")
    .then(res => {
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: res.data.products
      })
    })
    .catch(err => console.log(err))
}

export const addProduct = product => dispatch => {
  console.log("addProduct...")
  console.log(product)
  axios
    .post("/products", product, {
      headers: { authorization: localStorage.token }
    })
    .then(res => {
      console.log("success")
      dispatch({
        type: OPEN_MODAL,
        payload: {
          binary: false,
          input: false,
          message: "Plant successfully added!",
          type: "confirmationPlantAdd"
        }
      })
    })
    .catch(err => {
      dispatch({
        type: OPEN_MODAL,
        payload: {
          binary: false,
          input: false,
          message: "There was an error adding your plant", err,
          type: "error"
        }
      })
    })
}
export const toggleProductMenu = id => dispatch => {
  console.log("togglemenu", id)
  dispatch({
    type: PRODUCT_MENU_TOGGLE,
    payload: id
  })
}
export const toggleHideProduct = product => dispatch => {
  axios.patch("/products/hide", product, { headers: { authorization: localStorage.token } })
    .then(res => {
      console.log("product hproductden", res)
    })
    .catch(err => console.log(err))
  dispatch({
    type: TOGGLE_HIDE_PRODUCT,
    payload: product.id
  })
}
export const toggleShowProduct = product => dispatch => {
  axios.patch("/products/show", product, { headers: { authorization: localStorage.token } })
    .then(res => {
      console.log("product hproductden", res)
    })
    .catch(err => console.log(err))
  dispatch({
    type: TOGGLE_HIDE_PRODUCT,
    payload: product.id
  })
}
export const removeProduct = id => dispatch => {
  console.log("togglemenu", id)
  axios.delete(`/products/${id}`, { headers: { authorization: localStorage.token } })
    .then(res => {
      console.log("product deleted", res)
    })
    .catch(err => console.log(err))
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id
  })
}
export const productSearch = searchParam => dispatch => {
  axios
    .post("/products/search", searchParam)
    .then(res => {
      console.log("products found:", res)

      dispatch({
        type: PRODUCT_SEARCH,
        payload: searchParam.searchParam
      })
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: res.data.products
      })
    })
    .catch(err => console.log("search failed ", err))
}
