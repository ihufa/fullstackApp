import React, { Component } from "react"
import { connect } from "react-redux"
import { checkUser } from "../../state/actions/itemActions"

export class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  checkUser = e => {
    this.props.checkUser(this.state)
  }

  closeModal = e => {
    console.log(e.target.className)
    if (
      e.target.className === "modal" &&
      e.target.className !== "modal-input"
    ) {
      this.props.showLogin()
    }
  }

  render() {
    return (
      <div className="modal" onClick={this.closeModal}>
        <div className="login modal-form">
          <div>
            <input
              className="modal-input"
              type="text"
              id="email"
              placeholder="enter email"
              onChange={this.changeHandler}
            />
            <input
              className="modal-input"
              type="text"
              id="password"
              placeholder="enter password"
              onChange={this.changeHandler}
            />
            <button className="Btn" onClick={this.checkUser}>
              Log in
            </button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  items: state.items,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { checkUser }
)(Login)
