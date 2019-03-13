import React, { useState } from "react"
import { connect } from "react-redux"
import { clearUser } from "../state/actions/itemActions"
import { productSearch } from "../state/actions/productsActions"
import { Link } from "react-router-dom"

const LoginNav = props => {
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
        <div className="nav-item">
          <form onSubmit={searchFire}>
            <input onChange={onChange} type="text" />
            <input type="submit" defaultValue="Search" />
          </form>
        </div>
        <div className="nav-item">
          <Link to="/plants">See Plants</Link>
        </div>
        <div className="nav-item">
          <Link to="/myplants">{props.userData.userName}</Link>
        </div>
        <div onClick={logout} className="nav-item">
          Log out
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
)(LoginNav)
