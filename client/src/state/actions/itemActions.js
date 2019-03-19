import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USERS_LOADING,
  INITIATE_USER,
  CLEAR_USER,
  INVALID_LOGIN,
  CHANGE_EMAIL,
  CHANGE_ZIP
} from "./types"
import axios from "axios"

export const clearUser = () => dispatch => {
  dispatch({
    type: CLEAR_USER
  })
}

export const checkUser = user => dispatch => {
  console.log(user)
  axios
    .post("/users/login", user)
    .then(res => {
      dispatch({
        type: INITIATE_USER,
        payload: {
          userEmail: res.data.userEmail,
          userZip: res.data.userZip,
          userName: res.data.userName
        }
      })
      sessionStorage.setItem("token", "Bearer " + res.data.securityToken)
    })
    .catch(err => {
      dispatch({
        type: INVALID_LOGIN,
        payload: "something went wrong"
      })
    })
}

export const getUsers = () => dispatch => {
  console.log("getUsers...")
  axios
    .get("/users", { headers: { authorization: sessionStorage.token } })
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
}

export const deleteUser = id => dispatch => {
  console.log("deleteUser...")
  dispatch({
    type: DELETE_USER,
    payload: id
  })
  axios.delete("/users", { data: { _id: id } })
}

export const clearUserCreated = () => dispatch => {
  dispatch({
    type: ADD_USER,
    payload: false
  })
}

export const addUser = user => dispatch => {
  axios
    .post("/users", user)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: ADD_USER,
        payload: res.data
      })
    })
    .catch(err => {
      console.log("error: " + err.response.data)
      dispatch({
        type: INVALID_LOGIN,
        payload: err.response.data
      })
    })
}
export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  }
}
export const changeEmail = email => dispatch => {
  axios
    .patch("/users/email", email)
    .then(res => {
      console.log("changeEmail", res)
      dispatch({
        type: CHANGE_EMAIL,
        payload: email.newEmail
      })
    })
}
export const changeZip = zip => dispatch => {
  console.log(zip)
  axios
    .patch("/users/zip", zip)
    .then(res => {
      console.log("changeZip", res)
      dispatch({
        type: CHANGE_ZIP,
        payload: zip.zip
      })
    })
}
