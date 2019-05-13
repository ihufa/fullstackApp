import React, { useState } from "react"
import { connect } from "react-redux"
import { addUser } from "../../state/actions/itemActions"
import { openModal } from "../../state/actions/modalActions"
import { withRouter } from "react-router-dom"
import { ZIPS } from "../../zips"

const Signup = props => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [zip, setZip] = useState()
  const [city, setCity] = useState()

  const emailHandler = e => {
    setEmail(e.target.value)
  }
  const passwordHandler = e => {
    setPassword(e.target.value)
  }
  const nameHandler = e => {
    setName(e.target.value)
  }
  const zipHandler = e => {
    let value = e.target.value
    setZip(value)
    // eslint-disable-next-line eqeqeq
    let currentCity = ZIPS.filter(el => el.zip == value) // == cus ZIPS.zip are strings and value is number
    if (currentCity && currentCity[0] && currentCity[0].city) {
      let newCity = currentCity[0].city
      setCity(newCity)
      console.log(newCity)
    } else {
      setCity("")
    }
  }

  const formValidation = () => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!email) return "please enter en email adress"
    if (email && !email.match(reg)) return "please use a valid email adress"
    if (!password) return "please enter a password"
    if (password && password.length < 6)
      return "password needs to be 6 characters or more"
    if (!name) return "please enter a name"
    if (!zip) return "please enter a zip code"
    if (!city) return "please use a valid zip code"
    else return "accepted"
  }

  const addUser = e => {
    e.preventDefault()
    let validation = formValidation()
    if (validation === "accepted") {
      props.addUser({
        email: email.toLowerCase(),
        password: password,
        name: name,
        zip: zip,
        city: city
      })
    } else
      props.openModal({
        type: "error",
        message: validation,
        input: false,
        binary: false
      })
  }
  const closeModal = e => {
    if (
      e.target.className === "signupmodal" &&
      e.target.className !== "signup-modal-form"
    ) {
      props.history.push("/plants")
    }
  }
  return (
    <div className="signupmodal" onClick={closeModal}>
      <div className="signup-modal-form">
        <div>
          <form>
            <input
              className="modal-input"
              type="text"
              id="email"
              placeholder="Email"
              onChange={emailHandler}
            />
            <input
              className="modal-input"
              type="password"
              id="password"
              placeholder="Password"
              onChange={passwordHandler}
            />
            <input
              className="modal-input"
              type="text"
              id="name"
              placeholder="Name"
              onChange={nameHandler}
            />
            <div>
              <input
                className="modal-input zip-input"
                type="text"
                id="zip"
                placeholder="zip code"
                onChange={zipHandler}
              />
              {city ? <span>{city}</span> : <span />}
            </div>
            <button className="Btn" onClick={addUser}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.items,
  userData: state.items.userData,
  userCreated: state.items.userCreated
})

export default withRouter(
  connect(
    mapStateToProps,
    { addUser, openModal }
  )(Signup)
)
