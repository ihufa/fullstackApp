import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems, addItem, deleteItem } from '../actions/itemActions'

export class Signup extends Component {
constructor() {
    super()
    this.state = {
        
    }
}
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addItem = (e) => {
        e.preventDefault()
        this.props.addItem({
            email: this.state.email,
            password: this.state.password
            })
        
    }
    closeModal = (e) => {
        if (e.target.className === "modal" && e.target.className !== "modal-input")
        { this.props.showSignup() }
    }
    render() {
        return (
            <div className="modal" onClick={this.closeModal}>
                <div className="signup modal-form"> 
                    <div>
                        <input className="modal-input" type="text" id="email" placeholder="enter email" onChange={this.changeHandler}>
                        </input>
                        <input className="modal-input" type="text" id="password" placeholder="enter password" onChange={this.changeHandler}>
                        </input>
                        <button className="Btn"onClick={this.addItem}>Sign up
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items,
    userData: state.items.userData,
    userCreated: state.items.userCreated
})

export default connect(mapStateToProps, { getItems, deleteItem, addItem })(Signup)
