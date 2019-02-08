import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearUserCreated } from '../actions/itemActions'


export class SignupConfirm extends Component {

    closeModal = (e) => {
        if (e.target.className === "modal" && e.target.className !== "modal-input") {
            this.combined()
        }
    }
    combined = () => {
        this.props.clearUserCreated()
        this.props.showSignup()
    }
    render() {
        return (
            <div className="modal" onClick={this.closeModal}>
                <div className="SignupConfirm modal-form">
                    <div>
                        <div className="inline">
                            <p>{this.props.message}</p>
                        </div>
                        <div className="inline">
                        <button className="Btn" onClick={this.combined}>Ok
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { clearUserCreated })(SignupConfirm)
