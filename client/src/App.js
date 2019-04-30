import React, { useState, useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Signup from "./components/modals/Signup"
import Login from "./components/modals/Login"
import LoginNav from "./components/LoginNav"
import UserNav from "./components/UserNav"
import UserProfile from "./components/pages/UserProfile"
import Gallery from "./components/Gallery"
import { connect } from "react-redux"
import "./css/main.css"
import Modals from "./components/Modals"
import Swaps from "./components/pages/Swaps"
import Userplants from "./components/pages/Userplants"
import Faq from "./components/pages/Faq"
import Rules from "./components/pages/Rules"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import * as io from "socket.io-client"
import SocketContext from "./components/SocketContext"
import { getSwaps } from "./state/actions/swapActions"

const App = props => {
  let socket = io("http://localhost:4000", {
    query: `userId=${props.userData.userId}&userName=${props.userData.userName}`
  })

  socket.on("message", message => {
    console.log(message)
    props.getSwaps(props.userData.userId)
  })

  const [showLogin, setShowLogin] = useState()
  const [showSignup, setShowSignup] = useState()

  const showLoginHandler = () => {
    setShowLogin(!showLogin)
  }
  const showSignupHandler = () => {
    setShowSignup(!showSignup)
  }

  return (
    <SocketContext.Provider value={{ socket }}>
      <BrowserRouter>
        <div className="App">
          <Modals />
          {props.userData && <UserNav showLogin={showLoginHandler} />}
          {!props.userData && (
            <LoginNav
              showLogin={showLoginHandler}
              showSignup={showSignupHandler}
            />
          )}

          <div className="content-wrapper">
            <Route exact path="/" component={Gallery} />
            <Route path="/plants/" component={Gallery} />
            <Route path="/plants/login/" component={Login} />
            <Route path="/plants/signup/" component={Signup} />
            <Route exact path="/myplants" component={UserProfile} />
            <Route path="/myswaps" component={Swaps} />
            <Route path="/users" component={Userplants} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route path="/rules" component={Rules} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    </SocketContext.Provider>
  )
}

const mapStateToProps = state => ({
  userData: state.items.userData,
  userCreated: state.items.userCreated,
  invalidLogin: state.items.invalidLogin,
  profile: state.items.profile
})

export default connect(
  mapStateToProps,
  { getSwaps }
)(App)
