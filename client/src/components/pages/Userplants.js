import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getProductsByUserId } from "../../state/actions/productsActions"

const Userplants = props => {
  useEffect(() => {
    props.getProductsByUserId(props.location.pathname.split("/")[2])
  }, [])
  return (
    <div className="browsed-user-plant-wrapper">
      <h1>{props.location.pathname.split("/")[3]}'s plants</h1>
      <div className="browsed-user-plants">
        {(props.browsedUserProducts &&
          props.browsedUserProducts.length > 0) ?
            (props.browsedUserProducts.map((el, index) => (
              <div className="plant-card" key={el._id}>
                <img
                  className={"plant-img plantImg" + index}
                  id={"plant" + index}
                  alt={el.name}
                  src={"https://planthood.dk/plants/resized/" + el.image}
                />
                <div className="user-plant-grid-text">
                  <p>type: {el.name}</p>
                  <p>{el.message !== "undefined" ? el.message : ""}</p>
                  <p>{el.sapling ? "A cutting from this plant" : ""}</p>
                </div>
              </div>)
          ))
        : <div className="static-page"><h3>No plants in this garden</h3></div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  browsedUserProducts: state.items.browsedUserProducts
})

export default connect(
  mapStateToProps,
  { getProductsByUserId }
)(Userplants)
