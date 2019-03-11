import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getProducts } from "../state/actions/productsActions"

const Shop = props => {
  useEffect(() => props.getProducts(), [])

  return props.products.length > 0 ? (
    <div className="plant-gallery-page-wrapper">
      <div className="plant-grid">
        {props.products.map((el, index) => (
          <div key={el._id}>
            <img
              className="plant-img"
              alt={el.name}
              src={"http://localhost:5000/plants/" + el.image}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="plant">
      <h3>No plants for swap right now</h3>
    </div>
  )
}
const mapStateToProps = state => ({
  products: state.items.products
})

export default connect(
  mapStateToProps,
  { getProducts }
)(Shop)
