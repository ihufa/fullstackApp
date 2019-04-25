import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getSwaps } from "../state/actions/swapActions"
import { Link } from "react-router-dom"

const UserNav = props => {
  useEffect(() => {
    props.getSwaps(props.userData.userId)
  }, [])

  const isRelevantNotification = item => {
    if (item.requesterId === props.userData.userId) {
      // check if user is requester
      return !item.seenByRequester // if seenByRequester === false, then the item is relevant notification
    } else {
      return !item.seenByReceiver
    }
  }

  return (
    <div>
      <div className="navbar">
        <div className="nav-item-container">
          <div className="nav-logo">
            <Link to="/plants">
              <img
                alt="PlanthoodLogo"
                src={require("../svg/PlanthoodHeadline.svg")}
                className="svg svg-headline"
              />
            </Link>
          </div>
          <div className="nav-items-right">
            <div className="nav-item">
              <Link to="/myplants">
                <i className="fas fa-user-alt" />
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/myswaps">
                <i className="fas fa-comments" />

                {props.swaps.filter(isRelevantNotification).length > 0 ? (
                  <div className="nav-notification">
                    {props.swaps.filter(isRelevantNotification).length}
                  </div>
                ) : null}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    userData: state.items.userData,
    swaps: state.swaps.swaps
  }
}

export default connect(
  mapStateToProps,
  { getSwaps }
)(UserNav)
