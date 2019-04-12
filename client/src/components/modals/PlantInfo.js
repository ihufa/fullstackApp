import React, { useState } from 'react'
import { connect } from 'react-redux'
import { requestSwap } from '../../state/actions/swapActions'

const PlantInfo = props => {
    const [message, setMessage] = useState(`Hi ${props.userName.split(" ")[0]}, I would like to swap with your ${props.plantType}. Please see my plants and let me know if you are interested.`)
    const closeModal = e => {
        if (
            e.target.className === "modal" &&
            e.target.className !== "modal-form"
        ) {
            props.closeModal()
        }
    }
    const closeModalButton = e => {
        props.closeModal()
    }
    const swapHandler = e => {
        let swapRequest = {
            requesterId: props.userData.userId,
            requesterName: props.userData.userName,
            receiverId: props.userId,
            receiverName: props.userName,
            productId: props.productId,
            plant: props.image,
            message: message

        }
        props.requestSwap(swapRequest)
        props.closeModal()
    }
    const messageChangeHandler = e => {
        setMessage(e.target.value)
    }
    return (
        props ? (<div className="modal" onClick={closeModal}>
            <div className="modal-form modal-form-plantinfo">
                <div className="plant-info-modal-close-btn" onClick={closeModalButton}><i className="fas fa-times"></i></div>
                <img className="plant-info-image" src={"http://localhost:5000/plants/" + props.image} alt={props.name}></img>
                <p>Plant type: {props.plantType}</p>
                <p>Description: {props.description}</p>
                <p>Location: {props.userCity}</p>
                <p>User: {props.userName}</p>
                <p>Sapling ? {props.sapling ? "Yes" : "No"}</p>
                <p>Message: </p>
                <p><input defaultValue={`Hi ${props.userName.split(" ")[0]}, I would like to swap with your ${props.plantType}. Please see my plants and let me know if you are interested.`} type="text" onChange={messageChangeHandler}></input></p>
                <button className="Btn" onClick={swapHandler} >Ask to swap</button>
            </div>
        </div>) : null
    )
}

const mapStateToProps = state => ({
    products: state.items.products,
    userData: state.items.userData
})

export default connect(mapStateToProps, { requestSwap })(PlantInfo)