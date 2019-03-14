import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getProducts, addProduct } from "../../state/actions/productsActions"

const UserProfile = props => {
  const [plantName, setPlantName] = useState()
  const [plantDescription, setPlantDescription] = useState()
  const [plantImg, setPlantImg] = useState()

  const addPlant = e => {
    e.preventDefault()
    console.log(props)
    let body = new FormData()
    body.append("name", plantName)
    body.append("message", plantDescription)
    body.append("productImage", plantImg)
    body.append("user", props.userData.userEmail)
    body.append("zip", props.userData.userZip)

    props.addProduct(body)
  }

  //figure out how to make universal setState without setState()
  const onChangeImg = e => {
    setPlantImg(e.target.files[0])
  }
  const onChangeDescription = e => {
    setPlantDescription(e.target.value)
  }
  const onChangeName = e => {
    setPlantName(e.target.value)
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
      return hours + " Hours"
    } else {
      return days + " Days"
    }
  }

  const plantGrid =
    props.products.length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <div className="plant-grid">
          {props.products
            .filter(el => el.user === props.userData.userEmail)
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

  useEffect(() => props.getProducts(), [])

  return (
    <div>
      <h1>
        Good day {props.userData && props.userData.userName.split(" ")[0]}
      </h1>
      <div className="plant-img-upload">
        <form onSubmit={addPlant}>
          <input onChange={onChangeImg} type="file" />
          <input
            onChange={onChangeDescription}
            type="text"
            placeholder="description"
          />
          <input onChange={onChangeName} type="text" placeholder="name" />
          <input type="submit" value="Share!" />
        </form>
      </div>
      {plantGrid}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.items.products,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { getProducts, addProduct }
)(UserProfile)
