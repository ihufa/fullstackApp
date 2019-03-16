import React, { useState } from "react"
import { connect } from "react-redux"
import { checkUser } from "../../state/actions/itemActions"

const Login = (props) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const emailHandler = e => {
    setEmail(e.target.value)
  }
  const passwordHandler = e => {
    setPassword(e.target.value)
  }
  const checkUser = e => {
    props.checkUser({
      email: email,
      password: password
    })
  }

  const closeModal = e => {
    console.log(e.target.className)
    if (
      e.target.className === "modal" &&
      e.target.className !== "modal-input"
    ) {
      props.showLogin()
    }
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="login modal-form">
        <div>
          <input
            className="modal-input"
            type="text"
            id="email"
            placeholder="enter email"
            onChange={emailHandler}
          />
          <input
            className="modal-input"
            type="text"
            id="password"
            placeholder="enter password"
            onChange={passwordHandler}
          />
          <button className="Btn" onClick={checkUser}>
            Log in
            </button>
        </div>
      </div>
    </div>
  )

}
const mapStateToProps = state => ({
  items: state.items,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { checkUser }
)(Login)
