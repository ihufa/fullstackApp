import React, { Component } from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import LoginNav from './components/LoginNav'
import UserNav from './components/UserNav'
import LoginModal from './components/LoginModal'
import Shopnav from './components/Shopnav'
import Userprofile from './components/Userprofile'
import Shop from './components/Shop'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from './store'
import './css/main.css';

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
      <div className="App">
          {this.props.userData && <UserNav showLogin={this.showLogin} />}
          {!this.props.userData && <LoginNav showLogin={this.showLogin} showSignup={this.showSignup}/>}
          {(this.props.userCreated) ? null : this.state.showSignup && <Signup showSignup={this.showSignup}/>}
          {(this.props.userData) ? null : this.state.showLogin  && <Login showLogin={this.showLogin}/>}
          {this.props.userCreated && <LoginModal message="Thank you for signing up, to continue please log in!" showSignup={this.showSignup}/>}
          {this.props.invalidLogin && <LoginModal message={this.props.invalidLogin} showSignup={()=>{}} />}
          <div>

           {this.state.showShop && <Shop />}
           {this.props.profile && <Userprofile user={this.props.profile}/>}
          </div>
      </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.items.userData,
  userCreated: state.items.userCreated,
  invalidLogin: state.items.invalidLogin,
  profile: state.items.profile
})

export default connect(mapStateToProps)(App)
