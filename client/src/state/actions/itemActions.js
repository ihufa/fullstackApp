import {
  GET_USERS,
  ADD_USER,
  INITIATE_USER,
  CLEAR_USER,
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

// export const getUsers = () => dispatch => {      //don't need this for now
//   console.log("getUsers...")
//   axios
//     .get("/users", { headers: { authorization: localStorage.token } })
//     .then(res =>
//       dispatch({
//         type: GET_USERS,
//         payload: res.data
//       })
//     )
// }

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
    .patch("/users/email", email, { headers: { authorization: localStorage.token } })
    .then(res => {
      console.log("email return data ", res.data)

      let userData = {
        userEmail: res.data.email,
        userZip: res.data.zip,
        userName: res.data.name,
        userId: res.data.id,
        userCity: res.data.city
      }
      dispatch({
        type: INITIATE_USER,
        payload: userData
      })
      localStorage.setItem("userData", JSON.stringify(userData))

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
export const changeZip = zip => dispatch => {
  axios
    .patch("/users/zip", zip, { headers: { authorization: localStorage.token } })
    .then(res => {
      console.log("zip return data ", res.data)

      let userData = {
        userEmail: res.data.email,
        userZip: res.data.zip,
        userName: res.data.name,
        userId: res.data.id,
        userCity: res.data.city
      }
      dispatch({
        type: INITIATE_USER,
        payload: userData
      })
      localStorage.setItem("userData", JSON.stringify(userData))

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
