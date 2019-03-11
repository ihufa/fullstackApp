import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Signup from "./components/modals/Signup"
import Login from "./components/modals/Login"
import LoginNav from "./components/LoginNav"
import UserNav from "./components/UserNav"
import UserProfile from "./components/pages/UserProfile"
import Shop from "./components/Shop"
import { Provider } from "react-redux"
import { connect } from "react-redux"
import store from "./state/store"
import "./css/main.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      showLogin: false,
      showSignup: false,
      userData: "",
      showShop: true
    }
  }

  showLogin = () => {
    this.setState({ showLogin: !this.state.showLogin })
  }
  showSignup = () => {
    this.setState({ showSignup: !this.state.showSignup })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {this.props.userData && <UserNav showLogin={this.showLogin} />}
            {!this.props.userData && (
              <LoginNav
                showLogin={this.showLogin}
                showSignup={this.showSignup}
              />
            )}
            {this.props.userCreated
              ? null
              : this.state.showSignup && (
                  <Signup showSignup={this.showSignup} />
                )}
            {this.props.userData
              ? null
              : this.state.showLogin && <Login showLogin={this.showLogin} />}
            <Route path="/plants" component={Shop} />
            <Route path="/myplants" component={UserProfile} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.items.userData,
  userCreated: state.items.userCreated,
  invalidLogin: state.items.invalidLogin,
  profile: state.items.profile
})

export default connect(mapStateToProps)(App)
