import { GET_PRODUCTS, REMOVE_PRODUCT, UPDATE_PRODUCTS } from './types'
import axios from 'axios'

export const getProducts = () => dispatch => {
    console.log("getProducts...")
    axios
        .get('/products')
        .then(res => {
            dispatch({
                type: UPDATE_PRODUCTS,
                payload: res.data.products
            })
        })
        .catch(err => console.log("oopsie"+err))

}