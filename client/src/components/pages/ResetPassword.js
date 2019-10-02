import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const ResetPassword = props => {
    const [password1, setPassword1] = useState()
    const [password2, setPassword2] = useState()
  
    const password1Handler = e => {
      setPassword1(e.target.value)
    }
    const password2Handler = e => {
      setPassword2(e.target.value)
    }
    const changePassword = e => {
        e.preventDefault()
        if(password1 === password2) {
        const request = {
            id: props.history.location.pathname.split('/')[2],
            password: password1
        }
        axios.post('/users/newpass', request)
        props.history.push('/plants/login')
    }
}
    return (
    <>
    <h1>Enter new password</h1>
        <div className="centered">
          <input
            className="modal-input"
            type="password"
            id="password"
            placeholder="enter new password"
            onChange={password1Handler}
          />
          <input
            className="modal-input"
            type="password"
            id="password"
            placeholder="confirm new password"
            onChange={password2Handler}
          />
            <button className="Btn" onClick={changePassword}>
                Change Password
            </button>
        </div>
    </>
    )
}
export default withRouter(ResetPassword)