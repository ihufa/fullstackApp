import React, { useState } from "react"
import { productSearch } from "../state/actions/productsActions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const LoginNav = props => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  const closeBurgerMenu = e => {
    console.log(e.target.id)
    if (e.target.id !== "burgermenu") setShowBurgerMenu(false)
    document.removeEventListener("click", closeBurgerMenu)
  }
  const burgerMenuHandler = e => {
    document.body.addEventListener("click", closeBurgerMenu)
    setShowBurgerMenu(!showBurgerMenu)
  }
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
            <div className="nav-items-right-login">
              <Link to="/plants/login" className="nav-item-login">
                Log in
              </Link>
              <Link to="/plants/signup" className="nav-item-login">
                Sign up
              </Link>
              <div onClick={burgerMenuHandler} className="nav-item burger-menu">
                <img
                  alt="Planthood burgermenu"
                  src={require("../svg/burgermenu.svg")}
                  className="svg svg-headline"
                  id="burgermenu"
                />
              </div>
              <div
                className={`burger-menu-items ${
                  showBurgerMenu ? "burger-menu-items-active-login" : ""
                }`}>
                <Link to="/about">
                  <div className="burger-menu-item">
                    <h2>About</h2>
                  </div>
                </Link>
                <Link to="/rules">
                  <div className="burger-menu-item">
                    <h2>Rules</h2>
                  </div>
                </Link>
                <Link to="faq">
                  <div className="burger-menu-item">
                    <h2>FAQ</h2>
                  </div>
                </Link>
                <Link to="contact">
                  <div className="burger-menu-item">
                    <h2>Contact</h2>
                  </div>
                </Link>
              </div>
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
