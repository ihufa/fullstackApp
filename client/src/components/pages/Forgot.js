import React, { useState } from 'react'
import axios from 'axios'

export default function Forgot(props) {
    const [email, setEmail] = useState('')
    const [confirmation, setConfirmation] = useState(false)
  
    const changeEmailHandler = e => {
      setEmail(e.target.value)
    }
    const sendRenewLink = e => {
      e.preventDefault()
      if(email) {
        axios
        .post(`/users/resetlink/${email}`)
        .then(res => console.log('success', res))
        .catch(err => console.log('failure', err))
        setConfirmation(true)
      }
    }

    return (
    <>
        <div className="centered">
    <h1>Enter the email associated with your account</h1>
          <input className="centered"
            className="modal-input"
            type="email"
            id="email"
            placeholder="enter email"
            onChange={changeEmailHandler}
          />
            <button className="Btn" onClick={sendRenewLink}>
                Renew password
            </button>
        </div>
        {confirmation && <div className="centered">
          <h2>Email sent!</h2>
          <h3>If the email doesn't show up then remember to check spam filter</h3>
          </div>
        }
    </>
    )
}