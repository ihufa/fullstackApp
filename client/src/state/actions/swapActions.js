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
  console.log(localStorage.token)
  axios
    .post("/swaps", swapRequest, { headers: { authorization: localStorage.token } })
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
  console.log("getting swaps")
  axios
    .get(`/swaps/${id}`, { headers: { authorization: localStorage.token } })
    .then(res => {
      dispatch({
        type: UPDATE_SWAPS,
        payload: res.data.results
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
  let lul = "patch requests need a body!?"
  axios
    .patch(`/swaps/accept/${id}`, lul, { headers: { authorization: localStorage.token } })
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
    .delete(`/swaps/${id}`, { headers: { authorization: localStorage.token } })
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
    receiverId: message.receiverId,
    sender: message.sender,
    message: message.message,
    time: message.time
  }
  dispatch({
    type: ADD_MESSAGE,
    payload: message
  })
  console.log("/swaps/message.id sent", mes)
  axios
    .patch(`/swaps/${message.id}`, mes, { headers: { authorization: localStorage.token } })
    .then(() => console.log("addMessage success"))
    .catch(() => console.log("addMessage error"))
}

export const seeMessage = swap => dispatch => {
  console.log(swap)
  axios.patch(`/swaps/seen/${swap}`, { headers: { authorization: localStorage.token } })
    .then(() => {
    dispatch({
      type: SEE_MESSAGE,
      payload: swap
    })
    .catch(() => console.log("seeMessage error"))
  })
}
