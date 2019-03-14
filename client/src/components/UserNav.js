import React, { useState } from "react"
import { connect } from "react-redux"
import { clearUser } from "../state/actions/itemActions"
import { productSearch } from "../state/actions/productsActions"
import { Link } from "react-router-dom"

const UserNav = props => {
  const [search, setSearch] = useState("")

  const logout = e => {
    props.clearUser()
    props.showLogin()
  }

  const onChange = e => {
    setSearch(e.target.value)
  }
  const searchFire = e => {
    e.preventDefault()
    console.log(search)
    props.productSearch({ searchParam: search })
  }
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/plants">
            <h1>Plantbook <i className="fas fa-leaf" /></h1>
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
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    userData: state.items.userData
  }
}

export default connect(
  mapStateToProps,
  { clearUser, productSearch }
)(UserNav)
