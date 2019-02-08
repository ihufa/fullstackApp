import React, { Component } from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import LoginNav from './components/LoginNav'
import UserNav from './components/UserNav'
import SignupConfirm from './components/signupConfirm'
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
    userData: ""
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
          {this.props.userCreated && <SignupConfirm message="Thank you for signing up, to continue please log in!" showSignup={this.showSignup}/>}
          {this.props.invalidLogin && <SignupConfirm message={this.props.invalidLogin} showSignup={()=>{}} />}
      </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.items.userData,
  userCreated: state.items.userCreated,
  invalidLogin: state.items.invalidLogin
})

export default connect(mapStateToProps)(App)
