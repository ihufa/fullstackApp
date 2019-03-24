import {
  GET_USERS,
  ADD_USER,
  INITIATE_USER,
  CLEAR_USER,
  CHANGE_EMAIL,
  CHANGE_ZIP,
  OPEN_MODAL
} from "./types"
import axios from "axios"

export const clearUser = () => dispatch => {
  dispatch({
    type: CLEAR_USER
  })
}

export const checkUser = user => dispatch => {
  axios
    .post("/users/login", user)
    .then(res => {
      let userData = {
        userEmail: res.data.userEmail,
        userZip: res.data.userZip,
        userName: res.data.userName,
        userId: res.data.userId,
        userCity: res.data.userCity
      }
      dispatch({
        type: INITIATE_USER,
        payload: userData
      })
      localStorage.setItem("token", "Bearer " + res.data.securityToken)
      localStorage.setItem("userData", JSON.stringify(userData))
    })
    .catch(err => {
      dispatch({
        type: OPEN_MODAL,
        payload: {
          type: "error",
          message: "Invalid username or password",
          binary: false,
          input: false
        }
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

export const addUser = user => dispatch => {
  axios
    .post("/users", user)
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data
      })
      dispatch({
        type: OPEN_MODAL,
        payload: {
          type: "confirmationFrontpage",
          message: "User created, please log in",
          binary: false,
          input: false
        }
      })
    })
    .catch(err => {
      dispatch({
        type: OPEN_MODAL,
        payload: {
          message: err.response.data,
          binary: false,
          type: "error",
          input: false
        }
      })
    })
}

export const changeEmail = email => dispatch => {
  axios
    .patch("/users/email", email)
    .then(res => {
      dispatch({
        type: CHANGE_EMAIL,
        payload: email.input
      })
      dispatch({
        type: OPEN_MODAL,
        payload: {
          message: "Email updated!",
          binary: false,
          type: "confirmation"
        }
      })
    })
}
export const changeZip = zip => dispatch => {
  axios
    .patch("/users/zip", zip)
    .then(res => {
      dispatch({
        type: CHANGE_ZIP,
        payload: zip.input
      })
      dispatch({
        type: OPEN_MODAL,
        payload: {
          message: "Zip code changed!",
          binary: false,
          type: "confirmation"
        }
      })
    })
}
