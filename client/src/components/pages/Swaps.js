import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import io from "socket.io-client"
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
  let socket
  useEffect(() => {
    // props.getSwaps(props.userData.userId)
    socket = io("http://localhost:4000")
    if (socket !== undefined) {
      console.log(socket)
    }

    socket.send("message", {
      message: "message --------------------------------------"
    })
    socket.on("event", function(data) {})
    socket.on("disconnect", function() {})
  }, [])

  const showRequestsHandler = e => {
    setToggleInbox(false)
    socket.emit("message", { text: "message" })
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
    if (chatMessage !== "" && chatMessage !== " ") {
      props.addMessage({
        requester:
          props.userData.userId ===
          props.swaps.filter(el => el._id === toggledChat)[0].requesterId,
        id: toggledChat,
        sender: props.userData.userName,
        message: chatMessage,
        time: Date.now()
      })
      setChatMessage("")
    }
    setTimeout(() => {
      scrollDown()
    }, 0)
  }

  const timeConvert = millisec => {
    var seconds = (millisec / 1000).toFixed(0)

    var minutes = (millisec / (1000 * 60)).toFixed(0)

    var hours = (millisec / (1000 * 60 * 60)).toFixed(0)

    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0)

    if (seconds < 60) {
      return seconds + " Sec"
    } else if (minutes < 60) {
      return minutes + " Min"
    } else if (hours < 24) {
      return hours + " Hrs"
    } else {
      return days + " Days"
    }
  }
  const IncomingRequests =
    props.swaps && props.swaps.length > 0
      ? props.swaps
          .filter(el => el.requesterId !== props.userData.userId)
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
    props.swaps && props.swaps.length > 0 && !toggledChat
      ? props.swaps
          .sort((a, b) => {
            return (
              a.messages[a.messages.length - 1].time +
              b.messages[b.messages.length - 1].time
            )
          })
          .filter(el => el.accepted === true)
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
