import { UPDATE_PRODUCTS } from "./types"
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
      headers: { authorization: sessionStorage.token }
    })
    .then(res => {
      console.log("product added", res)
    })
    .catch(err => console.log(err))
}
