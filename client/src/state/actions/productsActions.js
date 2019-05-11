import {
  UPDATE_BROWSED_USER_PRODUCTS,
  UPDATE_USER_PRODUCTS,
  UPDATE_PRODUCTS,
  PRODUCT_MENU_TOGGLE,
  REMOVE_PRODUCT,
  TOGGLE_HIDE_PRODUCT,
  OPEN_MODAL,
  CONCAT_PRODUCTS
} from "./types"
import axios from "axios"

export const rotateProduct = img => {
  console.log(img)
  let path = img.img
  let id = img.id
  axios
  .patch(`products/rotate/${path}`)
  .then(res => {
    console.log(res)
  })
}

export const getProducts = args => dispatch => {
  console.log("getProducts", args)
  if (args.sort === "time") {
    axios
      .post("/products/sort/time", args)
      .then(res => {
        if (args.count[0] === 0)
          dispatch({
            type: UPDATE_PRODUCTS,
            payload: res.data
          })
        else {
          dispatch({
            type: CONCAT_PRODUCTS,
            payload: res.data
          })
        }
      })
      .catch(err => console.log(err))
  } else if (args.sort === "distance") {
    axios
      .post("/products/sort/distance", args)
      .then(res => {
        if (args.count[0] === 0)
          dispatch({
            type: UPDATE_PRODUCTS,
            payload: res.data
          })
        else {
          dispatch({
            type: CONCAT_PRODUCTS,
            payload: res.data
          })
        }
      })
      .catch(err => console.log(err))
  } else if (args.sort === "suggested") {
    axios
      .post("/products/sort/suggested", args)
      .then(res => {
        if (args.count[0] === 0)
          dispatch({
            type: UPDATE_PRODUCTS,
            payload: res.data
          })
        else {
          dispatch({
            type: CONCAT_PRODUCTS,
            payload: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }
}
export const getProductsByUserId = userId => dispatch => {
  console.log("getProducts...")
  axios
    .get(`/products/${userId}`)
    .then(res => {
      console.log("updateProductsByUserId...", res)
      dispatch({
        type: UPDATE_BROWSED_USER_PRODUCTS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}
export const getUserProducts = userId => dispatch => {
  console.log("getUserProducts...")
  axios
    .get(`/products/${userId}`)
    .then(res => {
      console.log("updateProductsByUserId...", res)
      dispatch({
        type: UPDATE_USER_PRODUCTS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}
export const addProduct = product => dispatch => {
  let id = product.userId
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
          message: "There was an error adding your plant",
          err,
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
  axios
    .patch("/products/hide", product, {
      headers: { authorization: localStorage.token }
    })
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
  axios
    .patch("/products/show", product, {
      headers: { authorization: localStorage.token }
    })
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
  axios
    .delete(`/products/${id}`, {
      headers: { authorization: localStorage.token }
    })
    .then(res => {
      console.log("product deleted", res)
    })
    .catch(err => console.log(err))
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id
  })
}
export const productSearch = args => dispatch => {
  axios
    .post("/products/search", args)
    .then(res => {
      if (args.count[0] === 0)
        dispatch({
          type: UPDATE_PRODUCTS,
          payload: res.data
        })
      else {
        dispatch({
          type: CONCAT_PRODUCTS,
          payload: res.data
        })
      }
    })
    .catch(err => console.log(err))
}
export const productSearchNoUser = args => dispatch => {
  axios
    .post("/products/search/nouser", args)
    .then(res => {
      if (args.count[0] === 0)
        dispatch({
          type: UPDATE_PRODUCTS,
          payload: res.data
        })
      else {
        dispatch({
          type: CONCAT_PRODUCTS,
          payload: res.data
        })
      }
    })
    .catch(err => console.log(err))
}
