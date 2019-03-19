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
            props.showModal()
        }
    }
    const cancel = () => {
        props.showModal()
    }
    const confirm = () => {
        console.log("props.plant", props.plant)
        props.confirm(props.plant)
        props.showModal()
    }
    const inputConfirm = (e) => {
        e.preventDefault()
        props.confirm(input)
        props.showModal()
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-form">
                <div className="confirmation-modal">
                    <h2>{props.modalMessage}</h2>
                    {props.input ? <input className="modal-input" onChange={changeHandler} type="text"></input> : null}
                    {!props.input ? <div className="confirmation-modal-buttons"><button onClick={confirm} className="Btn">Yes</button> <button onClick={cancel} className="Btn">Cancel</button></div> : null}
                    {props.input ? <div className="confirmation-modal-buttons"><button onClick={inputConfirm} className="Btn">Ok</button> <button onClick={cancel} className="Btn">Cancel</button></div> : null}

                </div>
            </div>
        </div>
    )
}

export default Confirmation