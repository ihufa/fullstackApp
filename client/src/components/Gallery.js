import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getProducts } from "../state/actions/productsActions"
import { openModal } from '../state/actions/modalActions'

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

  const swapHandler = e => {
    let id = e.target.id
    let plant = props.products.filter(el => el._id === id)

    props.openModal({
      type: "plantInfo",
      plantId: plant[0]._id,
      image: plant[0].image,
      plantType: plant[0].name,
      description: plant[0].message,
      userName: plant[0].userName,
      userCity: plant[0].userCity,
      time: plant[0].time,
      free: plant[0].free,
      sapling: plant[0].sapling
    })
  }

  const plantGrid =
    props.products && props.products.length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <div className="plant-grid">
          {props.products
            .map((el, index) => (
              <div className="plant-card" key={el._id}>
                <img
                  className={"plant-img plantImg" + index}
                  id={"plant" + index}
                  alt={el.name}
                  src={"http://localhost:5000/plants/" + el.image}
                />
                <div className="plant-img-time">{timeConvert(Date.now() - el.time)}</div>
                <button id={el._id} onClick={swapHandler} className={"plant request-button plant" + index}>
                  Swap
                </button>
                <div className="plant-grid-name">
                  <p>{el.name}</p>
                </div>
                <div className="plant-grid-city">
                  <p>{el.userCity}</p>
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

  return (<div>{plantGrid}</div>)


}

const mapStateToProps = state => ({
  products: state.items.products,
  productSearch: state.items.productSearch,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { getProducts, openModal }
)(Gallery)
