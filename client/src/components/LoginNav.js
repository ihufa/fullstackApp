import React, { useState } from "react"
import { productSearch } from "../state/actions/productsActions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"


const LoginNav = props => {
  const [search, setSearch] = useState("")

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
        <div className="nav-item-container">
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
              <Link to="/plants/login" className="nav-item">
                Log in
          </Link>
              <Link to="/plants/signup" className="nav-item">
                Sign up
          </Link>
              <div className="nav-item">About</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  { productSearch }
)(LoginNav)

