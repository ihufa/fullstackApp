import React from "react"
import { productSearch } from "../state/actions/productsActions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const LoginNav = props => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-item-container">
          <div className="nav-logo">
            <Link to="/plants">
              <img
                alt="PlanthoodLogo"
                src={require("../svg/PlanthoodHeadline.svg")}
                className="svg svg-headline"
              />
            </Link>
          </div>
          <div className="nav-items-right">
            <div className="nav-item">
              <Link to="/plants/login" className="nav-item">
                Log in
              </Link>
              <Link to="/plants/signup" className="nav-item">
                Sign up
              </Link>
              <div className="nav-item">About</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  { productSearch }
)(LoginNav)
