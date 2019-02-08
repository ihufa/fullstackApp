import React, { Component } from 'react'

export class LoginNav extends Component {
  render() {
    return (
      <div>
            <div className="navbar">
                <div className="nav-logo">Please Log in</div>
                <div className="nav-item" onClick={this.props.showLogin}>Log in</div>
                <div className="nav-item" onClick={this.props.showSignup}>Sign up</div>
                <div className="nav-item">Something</div>
            </div>
      </div>
    )
  }
}

export default LoginNav
