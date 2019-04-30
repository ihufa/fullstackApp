import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  getUserProducts,
  toggleProductMenu,
  removeProduct,
  toggleHideProduct,
  toggleShowProduct
} from "../../state/actions/productsActions"
import AddPlant from "../modals/AddPlant"
import { openModal } from "../../state/actions/modalActions"
import UserInfo from "./UserProfile/UserInfo"

const UserProfile = props => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [plantInFocus, setPlantInFocus] = useState()

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
  const addPlantHandler = () => {
    setShowAddModal(!showAddModal)
  }
  const removeProduct = e => {
    e.preventDefault()
    props.openModal({
      type: "productRemover",
      input: false,
      binary: true,
      message: "Are you sure you want to remove this plant?",
      id: plantInFocus
    })
  }
  const togglePlantMenu = e => {
    e.preventDefault()
    let id = e.target.id
    props.toggleProductMenu(id)
    setPlantInFocus(id)
    document.body.addEventListener(
      "click",
      () => {
        props.toggleProductMenu(id)
      },
      { once: true }
    )
  }
  const toggleHideProduct = e => {
    props.toggleHideProduct({ id: plantInFocus })
  }
  const toggleShowProduct = e => {
    props.toggleShowProduct({ id: plantInFocus })
  }

  const activePlantGrid =
    props.products &&
    props.products.length &&
    props.products
      .filter(el => el.userId === props.userData.userId)
      .filter(el => el.hidden === false).length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <h2>My active plants</h2>
        <div className="plant-grid">
          {props.products
            .filter(el => el.userId === props.userData.userId)
            .filter(el => el.hidden === false)
            .map((el, index) => (
              <div className="plant-card" key={el._id}>
                <img
                  className="plant-img"
                  alt={el.name}
                  src={"http://localhost:5000/plants/" + el.image}
                />
                <div onClick={togglePlantMenu} className={"image-menu"}>
                  <i id={el._id} className="fas fa-ellipsis-v" />
                </div>
                <div className={el.toggleMenu ? "image-menu-items" : "hide"}>
                  <div onClick={removeProduct}>
                    <p>Remove</p>
                  </div>
                  <div onClick={toggleHideProduct}>
                    <p>Hide</p>
                  </div>
                </div>
                <div className="profile-plant-grid-name">
                  <p>{el.name}</p>
                </div>
                <div className="profile-plant-grid-time">
                  <p>{timeConvert(Date.now() - el.time)} ago</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    ) : (
      <div className="plant">
        <h2>My plants</h2>
        <p>-</p>
      </div>
    )

  const hiddenPlantGrid =
    props.products &&
    props.products.length &&
    props.products
      .filter(el => el.userId === props.userData.userId)
      .filter(el => el.hidden === true).length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <h2>My private plants</h2>
        <div className="plant-grid">
          {props.products
            .filter(el => el.userId === props.userData.userId)
            .filter(el => el.hidden === true)
            .reverse()
            .map((el, index) => (
              <div className="plant-card" key={el._id}>
                <img
                  className="plant-img"
                  alt={el.name}
                  src={"http://localhost:5000/plants/" + el.image}
                />
                <div onClick={togglePlantMenu} className={"image-menu"}>
                  <i id={el._id} className="fas fa-ellipsis-v" />
                </div>
                <div className={el.toggleMenu ? "image-menu-items" : "hide"}>
                  <div onClick={removeProduct}>
                    <p>Remove</p>
                  </div>
                  <div onClick={toggleShowProduct}>
                    <p>Show</p>
                  </div>
                  <div>
                    <p>Edit</p>
                  </div>
                </div>
                <div className="profile-plant-grid-name">
                  <p>{el.name}</p>
                </div>
                <div className="profile-plant-grid-time">
                  <p>{timeConvert(Date.now() - el.time)} ago</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    ) : null

  useEffect(() => props.getUserProducts(props.userData.userId), [])

  return (
    <div className="user-profile-wrapper">
      <div className="user-info-container">
        <UserInfo />
        <div className="add-plant-btn-container">
          <button className="Btn btn-add-plant" onClick={addPlantHandler}>
            Add plant
          </button>
        </div>
      </div>
      {activePlantGrid}
      {hiddenPlantGrid}
      {showAddModal ? <AddPlant showModal={addPlantHandler} /> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.items.userProducts,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  {
    getUserProducts,
    toggleProductMenu,
    removeProduct,
    toggleHideProduct,
    toggleShowProduct,
    openModal
  }
)(UserProfile)
