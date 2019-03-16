import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getProducts } from "../state/actions/productsActions"

const Gallery = props => {
  useEffect(() => props.getProducts(), [])

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

  const plantGrid =
    props.products.length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <div className="plant-grid">
          {props.products
            .reverse()
            .map((el, index) => (
              <div key={el._id}>
                <img
                  className="plant-img"
                  alt={el.name}
                  src={"http://localhost:5000/plants/" + el.image}
                />
                <div className="plant-grid-name">
                  <p>{el.name}</p>
                </div>
                <div className="plant-grid-time">
                  <p>{timeConvert(Date.now() - el.time)} ago</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    ) : (
        <div className="plant">
          <h3>You have no active plants at the moment</h3>
        </div>
      )

  return plantGrid
}
const mapStateToProps = state => ({
  products: state.items.products,
  productSearch: state.items.productSearch,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { getProducts }
)(Gallery)
