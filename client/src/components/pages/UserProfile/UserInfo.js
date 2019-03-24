import React from 'react'
import { connect } from 'react-redux'
import { changeEmail, changeZip, clearUser } from '../../../state/actions/itemActions'
import { openModal, closeModal } from '../../../state/actions/modalActions'
import { withRouter } from 'react-router-dom'




const UserInfo = props => {

    const emailChangeHandler = () => {
        props.openModal({
            type: "emailChanger",
            message: "Your new email adress",
            input: "true",
            binary: "true",
            id: props.userData.userId
        })
    }

    const zipChangeHandler = () => {
        props.openModal({
            type: "zipChanger",
            message: "Your new zip code",
            input: "true",
            binary: "true",
            id: props.userData.userId
        })
    }
    const clearUser = () => {
        props.clearUser()
        localStorage.removeItem("token")
        localStorage.removeItem("userData")
        props.history.push("/")

    }

    return (
        <div className="user-info-container">
            <h3>User information</h3>
            <p><span className="user-info-label">Name:      </span><span className="user-info-value">{props.userData.userName} </span></p>
            <p><span className="user-info-label">Email:     </span><span className="user-info-value">{props.userData.userEmail} </span><i onClick={emailChangeHandler} className="far fa-edit"></i></p>
            <p><span className="user-info-label">Zipcode:   </span> <span className="user-info-value">{props.userData.userZip} </span><i onClick={zipChangeHandler} className="far fa-edit"></i></p >
            <button onClick={clearUser}>Log out</button>
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.items.userData
})

export default withRouter(connect(mapStateToProps, { changeEmail, changeZip, openModal, closeModal, clearUser })(UserInfo))