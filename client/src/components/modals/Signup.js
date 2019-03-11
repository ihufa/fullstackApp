import React, { Component } from "react"
import { connect } from "react-redux"
import { getUsers, addUser, deleteUser } from "../../state/actions/itemActions"

export class Signup extends Component {
  constructor() {
    super()
    this.state = {}
  }
  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  addUser = e => {
    e.preventDefault()
    this.props.addUser({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      zip: this.state.zip
    })
  }
  closeModal = e => {
    if (
      e.target.className === "modal" &&
      e.target.className !== "modal-input"
    ) {
      this.props.showSignup()
    }
  }
  render() {
    return (
      <div className="modal" onClick={this.closeModal}>
        <div className="signup modal-form">
          <div>
            <form>
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
              <input
                className="modal-input"
                type="text"
                id="name"
                placeholder="enter name"
                onChange={this.changeHandler}
              />
              <input
                className="modal-input"
                type="text"
                id="zip"
                placeholder="your zip code"
                onChange={this.changeHandler}
              />
              <button className="Btn" onClick={this.addUser}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items,
  userData: state.items.userData,
  userCreated: state.items.userCreated
})

export default connect(
  mapStateToProps,
  { getUsers, deleteUser, addUser }
)(Signup)
