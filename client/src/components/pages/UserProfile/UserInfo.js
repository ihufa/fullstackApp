import React, { useState } from 'react'
import { connect } from 'react-redux'
import Confirmation from '../../modals/Confirmation'
import { changeEmail, changeZip } from '../../../state/actions/itemActions'




const UserInfo = props => {
    const [showEmailModal, setShowEmailModal] = useState(false)
    const [showZipModal, setShowZipModal] = useState(false)

    const emailChangeHandler = () => {
        setShowEmailModal(!showEmailModal)
    }
    const zipChangeHandler = () => {
        setShowZipModal(!showZipModal)
    }
    const emailSubmit = email => {
        props.changeEmail({
            email: props.userData.userEmail,
            newEmail: email
        })
        setShowEmailModal(!showEmailModal)
    }
    const zipSubmit = zip => {
        props.changeZip({
            email: props.userData.userEmail,
            zip: zip
        })
        setShowZipModal(!showZipModal)
    }

    return (
        <div className="user-info-container">
            <h3>User information</h3>
            <p><span className="user-info-label">Name:      </span><span className="user-info-value">{props.userData.userName} </span></p>
            <p><span className="user-info-label">Email:     </span><span className="user-info-value">{props.userData.userEmail} </span><i onClick={emailChangeHandler} className="far fa-edit"></i></p>
            <p><span className="user-info-label">Zipcode:   </span> <span className="user-info-value">{props.userData.userZip} </span><i onClick={zipChangeHandler} className="far fa-edit"></i></p >
            {showEmailModal ? <Confirmation input="true" modalMessage="Enter new email" confirm={emailSubmit} cancel={emailChangeHandler} showModal={emailChangeHandler} /> : null}
            {showZipModal ? <Confirmation input="true" modalMessage="Enter new zipcode" confirm={zipSubmit} cancel={zipChangeHandler} showModal={zipChangeHandler} /> : null}

        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.items.userData
})

export default connect(mapStateToProps, { changeEmail, changeZip })(UserInfo)