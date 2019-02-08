import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearUser } from '../actions/itemActions'

export class LoginNav extends Component {
    
logout = (e) => {
    this.props.clearUser()
    this.props.showLogin()
}
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="nav-logo">Welcome {this.props.userData}</div>
                    <div className="nav-item">Manage portfolio</div>
                    <div className="nav-item">Bake a cupcake</div>
                    <div onClick = {this.logout}className="nav-item">Log out</div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {userData: state.items.userData}
}

export default connect(mapStateToProps, { clearUser })(LoginNav);