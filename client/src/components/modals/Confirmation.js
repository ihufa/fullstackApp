import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../../state/actions/productsActions'

const Confirmation = props => {
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
    const removeProduct = () => {
        console.log("props.plant", props.plant)
        props.removeProduct(props.plant)
        props.showModal()
    }
    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-form">
                <div className="confirmation-modal">
                    <h2>Are you sure you want to {props.modalAction} ?</h2>
                    <div className="confirmation-modal-buttons"><button onClick={removeProduct} className="Btn">Yes</button> <button onClick={cancel} className="Btn">Cancel</button></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {

}
export default connect(mapStateToProps, { removeProduct })(Confirmation)