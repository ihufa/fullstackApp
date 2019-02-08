import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkItem } from '../actions/itemActions'


export class Login extends Component {
  constructor() {
    super()
    this.state= {

    }
  }

changeHandler = (e) => {
  this.setState({
    [e.target.id]:e.target.value
  })
}
checkItem = (e) => {
  this.props.checkItem(this.state)
}

closeModal = (e) => {
  console.log(e.target.className)
  if (e.target.className === "modal" && e.target.className !== "modal-input")
  {this.props.showLogin()}
}

  render() {
    return (
      <div className="modal" onClick ={this.closeModal}>
            <div className="login modal-form">
              <div>
                <input className="modal-input" type="text" id="email" placeholder="enter email" onChange={this.changeHandler}>
                </input>
                <input className="modal-input" type="text" id="password" placeholder="enter password" onChange={this.changeHandler}>
                </input>
                <button className="Btn" onClick={this.checkItem}>Log in
                    </button>
              </div>
            </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    items: state.items,
    userData: state.items.userData
})

export default connect(mapStateToProps, { checkItem })(Login)
