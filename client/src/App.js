import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Signup from "./components/modals/Signup"
import Login from "./components/modals/Login"
import LoginNav from "./components/LoginNav"
import UserNav from "./components/UserNav"
import UserProfile from "./components/pages/UserProfile"
import Gallery from "./components/Gallery"
import { Provider } from "react-redux"
import { connect } from "react-redux"
import store from "./state/store"
import "./css/main.css"
import Footer from "./components/Footer"
import Modals from './components/Modals'
import Swaps from './components/pages/Swaps'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userData: "",
      showGallery: true
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
            <Modals />
            {this.props.userData && <UserNav showLogin={this.showLogin} />}
            {!this.props.userData && (<LoginNav showLogin={this.showLogin} showSignup={this.showSignup} />)}

            <div className="content-wrapper">
              <Route exact path="/" component={Gallery} />
              <Route path="/plants/" component={Gallery} />
              <Route path="/plants/login/" component={Login} />
              <Route path="/plants/signup/" component={Signup} />
              <Route exact path="/myplants" component={UserProfile} />
              <Route path="/myswaps" component={Swaps} />
            </div>
            <Footer />
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
