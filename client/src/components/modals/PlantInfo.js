import React, { useState, useContext } from "react"
import { connect } from "react-redux"
import { requestSwap } from "../../state/actions/swapActions"
import SocketContext from "../SocketContext"

const PlantInfo = props => {
  const [message, setMessage] = useState(
    `Hi ${props.userName.split(" ")[0]}, I would like to swap with your ${
      props.plantType
    }. Please see my plants and let me know if you are interested.`
  )
  const { socket } = useContext(SocketContext)
  const closeModal = e => {
    if (e.target.className === "modal" && e.target.className !== "modal-form") {
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
    socket.emit("message", swapRequest)
    props.closeModal()
  }
  const messageChangeHandler = e => {
    setMessage(e.target.value)
  }
  return props ? (
    <div className="modal" onClick={closeModal}>
      <div className="modal-form modal-form-plantinfo">
        <div className="plant-info-modal-close-btn" onClick={closeModalButton}>
          <i className="fas fa-times" />
        </div>
        <img
          className="plant-info-image"
          src={"https://planthood.dk/plants/resized/" + props.image}
          alt={props.name}
        />
        <p>Plant: {props.plantType}</p>
        <p>{props.description !== "undefined" ? props.description : ""}</p>
        <p>Location: {props.userCity}</p>
        <p>User: {props.userName}</p>
        {props.userData.userId !== props.userId ? (
          <>
            <p>
              <textarea
                maxLength="160"
                defaultValue={`Hi ${
                  props.userName.split(" ")[0]
                }, I would like to swap with your ${
                  props.plantType
                }. Please see my plants and let me know if you are interested.`}
                type="text"
                onChange={messageChangeHandler}
              />
            </p>
            <button className="Btn" onClick={swapHandler}>
              Ask to swap
            </button>
          </>
        ) : null}
      </div>
    </div>
  ) : null
}

const mapStateToProps = state => ({
  products: state.items.products,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { requestSwap }
)(PlantInfo)
