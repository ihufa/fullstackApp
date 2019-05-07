import React, { useState, useContext } from "react"
import { connect } from "react-redux"
import {
  getSwaps,
  acceptSwap,
  deleteSwap,
  addMessage,
  seeMessage
} from "../../state/actions/swapActions"
import { Link } from "react-router-dom"
import SocketContext from "../SocketContext"

const Swaps = props => {
  const [toggleInbox, setToggleInbox] = useState(false) // false = show Incoming requests, true = show Ongoing swaps
  const [toggledChat, setToggledChat] = useState(null)
  const [chatMessage, setChatMessage] = useState("")
  const { socket } = useContext(SocketContext)

  const showRequestsHandler = e => {
    setToggleInbox(false)
  }
  const showSwapsHandler = e => {
    setToggleInbox(true)
    setToggledChat(null)
  }
  const acceptHandler = e => {
    props.acceptSwap(e.target.id)
  }
  const deleteHandler = e => {
    props.deleteSwap(e.target.id)
  }
  const chatToggleHandler = e => {
    setToggledChat(e.target.id)
    props.seeMessage(e.target.id)
    setTimeout(() => {
      scrollDown()
    }, 0)
  }
  const isRelevantNotification = item => {
    if (item.requesterId === props.userData.userId) {
      // check if user is requester
      return !item.seenByRequester // if seenByRequester === false, then the item is relevant notification
    } else {
      return !item.seenByReceiver
    }
  }
  const scrollDown = () => {
    let chatWindow = document.getElementsByClassName("chat-box-history")[0]
    if (chatWindow) {
      let xH = chatWindow.scrollHeight
      chatWindow.scrollTo(0, xH)
    }
  }
  const onChatChangeHandler = e => {
    setChatMessage(e.target.value)
  }
  const sendChatHandler = e => {
    e.preventDefault()
    let chatRequester = props.swaps.filter(el => el._id === toggledChat)[0]
      .requesterId
    let chatReceiver = props.swaps.filter(el => el._id === toggledChat)[0]
      .receiverId
    let receiverId
    if (chatRequester !== props.userData.userId) {
      receiverId = chatRequester
    } else if (chatReceiver !== props.userData.userId) {
      receiverId = chatReceiver
    }
    if (chatMessage !== "" && chatMessage !== " ") {
      let message = {
        // is the message sender the original requester of the swap, true=yes
        requester:
          props.userData.userId ===
          props.swaps.filter(el => el._id === toggledChat)[0].requesterId,
        id: toggledChat,
        sender: props.userData.userName,
        receiverId: receiverId,
        message: chatMessage,
        time: Date.now()
      }
      props.addMessage(message)
      socket.emit("message", message)
      setChatMessage("")
    }
    setTimeout(() => {
      scrollDown()
    }, 0)
  }

  const IncomingRequests =
    props.swaps &&
    props.swaps.length &&
    props.swaps
      .filter(el => el.requesterId !== props.userData.userId)
      .filter(el => el.accepted === false) > 0 ? (
      props.swaps
        .filter(el => el.requesterId !== props.userData.userId)
        .filter(el => el.accepted === false)
        .map((el, index) => (
          <div key={el._id} className="swap-item">
            <div className="swap-inbox-text">
              <img
                className="swap-inbox-img"
                alt={el.plantType}
                src={"https://planthood.dk/plants/resized/" + el.plant}
              />
              <Link to={`/users/${el.requesterId}`}>
                <div className="swap-inbox-sender">{el.requesterName}</div>
              </Link>{" "}
              <div className="swap-inbox-message">{el.messages[0].message}</div>
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
    ) : (
      <div className="no-requests">
        <h2>Nobody has asked to swap with you yet :(</h2>
      </div>
    )

  const Chat =
    props.swaps &&
    props.swaps.length > 0 &&
    props.swaps.filter(swap => swap._id === toggledChat) &&
    props.swaps.filter(swap => swap._id === toggledChat)[0] &&
    props.swaps.filter(swap => swap._id === toggledChat)[0].messages ? (
      <div className="chat-box">
        <div className="chat-box-history">
          <div className="chat-box-history-text">
            {props.swaps
              .filter(swap => swap._id === toggledChat)[0]
              .messages.map((el, index) => (
                <div key={index} className="chat-box-message">
                  <span className="chat-box-sender">{el.sender}</span>
                  <span className="chat-box-timestamp">
                    {new Date(el.time).toLocaleTimeString("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hourCycle: "h24"
                    })}
                  </span>
                  <p className="chat-box-message">{el.message}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="chat-box-input">
          <form>
            <input
              onChange={onChatChangeHandler}
              placeholder={`Message ${
                props.swaps.filter(swap => swap._id === toggledChat)[0]
                  .requesterId === props.userData.userId
                  ? props.swaps.filter(swap => swap._id === toggledChat)[0]
                      .receiverName
                  : props.swaps.filter(swap => swap._id === toggledChat)[0]
                      .requesterName
              }`}
              type="text"
              value={chatMessage}
            />
            <button onClick={sendChatHandler} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    ) : null

  const OngoingSwaps =
    (props.swaps &&
      props.swaps.length &&
      props.swaps.filter(el => el.accepted === true).length) > 0 ? (
      !toggledChat ? (
        props.swaps
          .filter(el => el.accepted === true)
          .sort((a, b) => {
            if (
              a.messages[a.messages.length - 1].time <
              b.messages[b.messages.length - 1].time
            )
              return 1
            else {
              return -1
            }
          })
          .map((el, index) => (
            <div
              onClick={chatToggleHandler}
              key={el._id}
              className="swap-chat-item">
              {isRelevantNotification(el) ? (
                <div className="swap-chat-item-notification" />
              ) : null}
              <div className="swap-chat-text">
                <img
                  id={el._id}
                  className="swap-chat-img"
                  alt={el.plantType}
                  src={"https://planthood.dk/plants/resized/" + el.plant}
                />
                {el.requesterId !== props.userData.userId ? (
                  <Link to={`/users/${el.requesterId}/${el.requesterName}`}>
                    <div className="swap-chat-sender">{el.requesterName}</div>
                  </Link>
                ) : (
                  <Link to={`/users/${el.receiverId}/${el.receiverName}`}>
                    <div className="swap-chat-sender">{el.receiverName}</div>
                  </Link>
                )}
                <div id={el._id} className="swap-chat-message-sender">
                  <span id={el._id}>
                    [
                    {new Date(
                      el.messages[el.messages.length - 1].time
                    ).toLocaleTimeString("en", {
                      weekday: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                      hourCycle: "h24"
                    })}
                    ] {el.messages[el.messages.length - 1].sender}:{" "}
                    {el.messages[el.messages.length - 1].message}
                  </span>
                </div>
              </div>
            </div>
          ))
      ) : (
        Chat
      )
    ) : (
      <div className="no-requests">
        <h2>Not much chatting going on</h2>
      </div>
    )

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
            {props.swaps &&
            props.swaps.length &&
            props.swaps
              .filter(el => el.requesterId !== props.userData.userId)
              .filter(el => el.accepted === false).length > 0 ? (
              <div className="incoming-messages-notification-number">
                {
                  props.swaps
                    .filter(el => el.requesterId !== props.userData.userId)
                    .filter(el => el.accepted === false).length
                }
              </div>
            ) : null}
          </div>
          <div
            onClick={showSwapsHandler}
            className={`swap-messages-toggler-right ${
              !toggleInbox ? "deactivated" : ""
            }`}>
            {" "}
            <h2>Messages</h2>
            {props.swaps
              .filter(el => el.accepted === true)
              .filter(isRelevantNotification).length > 0 ? (
              <div className="messages-notification-number">
                {
                  props.swaps
                    .filter(el => el.accepted === true)
                    .filter(isRelevantNotification).length
                }
              </div>
            ) : null}
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
