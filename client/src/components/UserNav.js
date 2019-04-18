import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { productSearch } from "../state/actions/productsActions"
import { getSwaps } from "../state/actions/swapActions"
import { Link } from "react-router-dom"

const UserNav = props => {
  const [search, setSearch] = useState("")

  useEffect(() => {
    props.getSwaps(props.userData.userId)
  }, [])
  const onChange = e => {
    setSearch(e.target.value)
  }
  const searchFire = e => {
    e.preventDefault()
    console.log(search)
    props.productSearch({ searchParam: search })
  }
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
              <h1>
                Planthood <i className="fas fa-leaf" />
              </h1>
            </Link>
          </div>
          <div className="nav-items-right">
            <div className="nav-item search-container">
              <div className="searchbox">
                <form onSubmit={searchFire}>
                  <input
                    onChange={onChange}
                    type="search"
                    className="search"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </div>
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
  { productSearch, getSwaps }
)(UserNav)
