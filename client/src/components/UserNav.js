import React, { Component } from "react"
import { connect } from "react-redux"
import { clearUser } from "../state/actions/itemActions"
import { Link } from "react-router-dom"

export class LoginNav extends Component {
  logout = e => {
    this.props.clearUser()
    this.props.showLogin()
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="nav-item">
            <Link to="/plants">See Plants</Link>
          </div>
          <div className="nav-item">
            <Link to="/myplants">My Plants</Link>
          </div>
          <div onClick={this.logout} className="nav-item">
            Log out
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { userData: state.items.userData }
}

export default connect(
  mapStateToProps,
  { clearUser }
)(LoginNav)
