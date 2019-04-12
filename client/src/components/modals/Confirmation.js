import React from 'react'

const Confirmation = props => {
    let input = ""

    const changeHandler = e => {
        input = e.target.value
    }
    const closeModal = e => {
        if (
            e.target.className === "modal" &&
            e.target.className !== "modal-form"
        ) {
            props.closeModal()
        }
    }
    const cancel = () => {
        props.closeModal()
    }
    const zipConfirm = zip => {
        if (zip > 1000 && zip < 10000) {
            return true
        }
    }
    const emailConfirm = email => {
        const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        if (!email)
            return false
        if (email && email.match(reg))
            return true
    }
    const inputConfirm = () => {
        if ((props.type === "zipChanger" && zipConfirm(input)) || (props.type === "emailChanger" && emailConfirm(input))) {
            props.confirm({
                id: props.id,
                input: input
            })
            props.closeModal()
        }


    }

    const confirm = (e) => {
        e.preventDefault()
        props.confirm(props.id)
        props.closeModal()
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-form">
                <div className="confirmation-modal">
                    <h2>{props.message}</h2>
                    {props.input ? <input className="modal-input" onChange={changeHandler} type="text"></input> : null}
                    {!props.input && props.binary ? <div className="confirmation-modal-buttons"><button onClick={confirm} className="Btn">Yes</button> <button onClick={cancel} className="Btn">Cancel</button></div>
                        : !props.input && !props.binary ? <button onClick={cancel} className="Btn">Ok</button> : null}
                    {props.input ? <div className="confirmation-modal-buttons"><button onClick={inputConfirm} className="Btn">Ok</button> <button onClick={cancel} className="Btn">Cancel</button></div> : null}

                </div>
            </div>
        </div>
    )
}

export default Confirmation