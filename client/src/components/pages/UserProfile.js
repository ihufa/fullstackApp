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

  return (
    <div>
      <h1>My plants</h1>
      <div className="plant-grid" />
      <div className="plant-img-upload">
        <form onSubmit={addPlant}>
          <input onChange={onChangeImg} type="file" />
          <input
            onChange={onChangeDescription}
            type="text"
            placeholder="plant name"
          />
          <input
            onChange={onChangeName}
            type="text"
            placeholder="description"
          />
          <input type="submit" value="Share!" />
        </form>
      </div>
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
