import axios from "axios"
import {
  REQUEST_SWAP,
  UPDATE_SWAPS,
  OPEN_MODAL,
  ACCEPT_SWAP,
  DELETE_SWAP,
  ADD_MESSAGE,
  SEE_MESSAGE
} from "./types"

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
export const acceptSwap = id => dispatch => {
  axios
    .patch(`/swaps/accept/${id}`)
    .then(res => {
      dispatch({
        type: ACCEPT_SWAP,
        payload: id
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_MESSAGE,
        payload: {
          id: id,
          sender: "",
          message: "error"
        }
      })
    })
}
export const deleteSwap = id => dispatch => {
  axios
    .delete(`/swaps/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_SWAP,
        payload: id
      })
    })
    .catch(err => {
      dispatch({
        type: UPDATE_SWAPS,
        payload: ["error 404"]
      })
    })
}
export const addMessage = message => dispatch => {
  let mes = {
    requester: message.requester,
    sender: message.sender,
    message: message.message,
    time: message.time
  }
  axios
    .patch(`/swaps/${message.id}`, mes)
    .then(res => {
      dispatch({
        type: ADD_MESSAGE,
        payload: message
      })
    })
    .catch(console.log("addMessage error"))
}

export const seeMessage = user => dispatch => {
  axios.patch(`/swaps/seen/${user.id}`, user).then(res => {
    dispatch({
      type: SEE_MESSAGE,
      payload: user
    })
  })
}
