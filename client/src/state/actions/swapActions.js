import axios from 'axios'
import { REQUEST_SWAP, UPDATE_SWAPS, OPEN_MODAL } from './types'

export const requestSwap = swapRequest => dispatch => {
    axios
        .post("/swaps", swapRequest)
        .then(res => {
            dispatch({
                type: REQUEST_SWAP,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: OPEN_MODAL,
                payload: {
                    binary: false,
                    input: false,
                    type: "error",
                    message: "swap failed"
                }
            })
        })
}
export const getSwaps = id => dispatch => {
    axios
        .get(`/swaps/${id}`)
        .then(res => {
            dispatch({
                type: UPDATE_SWAPS,
                payload: res.data.result
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_SWAPS,
                payload: ["error 404"]
            })
        })
}



