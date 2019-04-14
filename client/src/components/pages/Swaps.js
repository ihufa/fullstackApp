import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {
  getSwaps,
  acceptSwap,
  deleteSwap,
  addMessage,
  seeMessage
} from "../../state/actions/swapActions"
import { Link } from "react-router-dom"

const Swaps = props => {
  const [toggleInbox, setToggleInbox] = useState(false) // false = show Incoming requests, true = show Ongoing swaps
  const [toggledChat, setToggledChat] = useState(null)
  const [chatMessage, setChatMessage] = useState("")

  useEffect(() => {
    props.getSwaps(props.userData.userId)
  }, [])

  const showRequestsHandler = e => {
    setToggleInbox(false)
  }
  const showSwapsHandler = e => {
    setToggleInbox(true)
  }
  const acceptHandler = e => {
    props.acceptSwap(e.target.id)
  }
  const deleteHandler = e => {
    props.deleteSwap(e.target.id)
  }
  const chatToggleHandler = e => {
    setToggledChat(e.target.id)
    props.seeMessage({
      requester:
        props.userData.userId ===
        props.swaps.filter(el => el._id === e.target.id)[0].requesterId,
      id: e.target.id
    })
  }
  const onChatChangeHandler = e => {
    setChatMessage(e.target.value)
  }
  const sendChatHandler = e => {
    e.preventDefault()
    props.addMessage({
      requester:
        props.userData.userId ===
        props.swaps.filter(el => el._id === toggledChat)[0].requesterId,
      id: toggledChat,
      sender: props.userData.userName,
      message: chatMessage,
      time: Date.now()
    })
  }
  const backToSwapsHandler = e => {
    e.preventDefault()
    setToggledChat("")
  }

  const IncomingRequests =
    props.swaps && props.swaps.length > 0
      ? props.swaps
          .filter(el => el.accepted === false)
          .map((el, index) => (
            <div key={el._id} className="swap-item">
              <div className="swap-inbox-text">
                <img
                  className="swap-inbox-img"
                  alt={el.plantType}
                  src={"http://localhost:5000/plants/" + el.plant}
                />
                <Link to={`/users/${el.requesterId}`}>
                  <div className="swap-inbox-sender">{el.requesterName}</div>
                </Link>{" "}
                <div className="swap-inbox-message">
                  {el.messages[0].message}
                </div>
                <div className="swap-inbox-buttons">
                  <button
                    onClick={acceptHandler}
                    id={el._id}
                    className="swap-inbox-yes-button">
                    Accept
                  </button>
                  <button
                    onClick={deleteHandler}
                    id={el._id}
                    className="swap-inbox-no-button">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))
      : null

  const Chat =
    props.swaps &&
    props.swaps.length > 0 &&
    props.swaps.filter(swap => swap._id === toggledChat) &&
    props.swaps.filter(swap => swap._id === toggledChat)[0] &&
    props.swaps.filter(swap => swap._id === toggledChat)[0].messages ? (
      <div className="chat-box">
        <button onClick={backToSwapsHandler}>Back</button>
        <div className="chat-box-history">
          {props.swaps
            .filter(swap => swap._id === toggledChat)[0]
            .messages.map((el, index) => (
              <div key={index}>
                {el.sender} {el.message}
              </div>
            ))}
        </div>
        <div className="chat-box-input">
          <form>
            <input
              onChange={onChatChangeHandler}
              placeholder="type here..."
              type="text"
            />
            <button onClick={sendChatHandler} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    ) : null

  const OngoingSwaps =
    props.swaps && props.swaps.length > 0 && !toggledChat
      ? props.swaps
          .filter(el => el.accepted === true)
          .map((el, index) => (
            <div
              onClick={chatToggleHandler}
              key={el._id}
              className="swap-chat-item">
              <div className="swap-chat-text">
                <img
                  id={el._id}
                  className="swap-chat-img"
                  alt={el.plantType}
                  src={"http://localhost:5000/plants/" + el.plant}
                />
                <Link to={`/users/${el.requesterId}`}>
                  <div className="swap-chat-sender">{el.requesterName}</div>
                </Link>
                <div id={el._id} className="swap-chat-message-sender">
                  <span id={el._id}>
                    {el.messages[el.messages.length - 1].sender}:{" "}
                    {el.messages[el.messages.length - 1].message}
                  </span>
                </div>
              </div>
            </div>
          ))
      : Chat

  return (
    <div className="profile-swaps-container">
      <div className="swap-inbox">
        <div className="swap-messages-toggler">
          <div
            onClick={showRequestsHandler}
            className={`swap-messages-toggler-left ${
              toggleInbox ? "deactivated" : ""
            }`}>
            <h2>Incoming requests</h2>
          </div>
          <div
            onClick={showSwapsHandler}
            className={`swap-messages-toggler-right ${
              !toggleInbox ? "deactivated" : ""
            }`}>
            {" "}
            <h2>Ongoing swaps</h2>
          </div>
        </div>
        {!toggleInbox ? IncomingRequests : null}
        {toggleInbox ? OngoingSwaps : null}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.items.userData,
  swaps: state.swaps.swaps
})
export default connect(
  mapStateToProps,
  { getSwaps, acceptSwap, deleteSwap, addMessage, seeMessage }
)(Swaps)
