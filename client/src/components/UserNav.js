import React, { useState, useEffect, useContext } from "react"
import { connect } from "react-redux"
import { getSwaps } from "../state/actions/swapActions"
import { clearUser } from "../state/actions/itemActions"
import { Link } from "react-router-dom"
import SocketContext from "./SocketContext"

const UserNav = props => {
  const { socket } = useContext(SocketContext)
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  useEffect(() => {
    props.getSwaps(props.userData.userId)
  }, [])

  const clearUser = () => {
    props.clearUser()
    localStorage.removeItem("token")
    localStorage.removeItem("userData")
    socket.disconnect()
  }

  const isRelevantNotification = item => {
    if (item.requesterId === props.userData.userId) {
      // check if user is requester
      return !item.seenByRequester // if seenByRequester === false, then the item is relevant notification
    } else {
      return !item.seenByReceiver
    }
  }
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
            <div className="nav-item">
              <Link to="/myplants">
                <img
                  alt="Planthood profile"
                  src={require("../svg/profile.svg")}
                  className="svg svg-headline"
                />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/myswaps">
                <img
                  alt="Planthood messages"
                  src={require("../svg/messages.svg")}
                  className="svg svg-headline"
                />

                {props.swaps.filter(isRelevantNotification).length > 0 ? (
                  <div className="nav-notification">
                    {props.swaps.filter(isRelevantNotification).length}
                  </div>
                ) : null}
              </Link>
            </div>
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
                showBurgerMenu ? "burger-menu-items-active" : ""
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
              <Link to="/plants">
              <div onClick={clearUser} className="burger-menu-item">
                <h2>Log out</h2>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    userData: state.items.userData,
    swaps: state.swaps.swaps
  }
}

export default connect(
  mapStateToProps,
  { getSwaps, clearUser }
)(UserNav)
