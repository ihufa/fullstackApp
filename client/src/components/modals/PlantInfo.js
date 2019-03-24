import React from 'react'
import { connect } from 'react-redux'

const PlantInfo = props => {

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

    return (
        props ? (<div className="modal" onClick={closeModal}>
            <div className="modal-form modal-form-plantinfo">
                <div className="plant-info-modal-close-btn" onClick={closeModalButton}><i className="fas fa-times"></i></div>
                <img className="plant-info-image" src={"http://localhost:5000/plants/" + props.image} alt={props.name}></img>
                <p>Plant type: {props.plantType}</p>
                <p>Description: {props.description}</p>
                <p>Location: {props.userCity}</p>
                <p>User: {props.userName}</p>
                <p>Free ? {props.free ? "Yes" : "No"}</p>
                <p>Sapling ? {props.sapling ? "Yes" : "No"}</p>
            </div>
        </div>) : null
    )
}

const mapStateToProps = state => ({
    products: state.items.products
})

export default connect(mapStateToProps)(PlantInfo)