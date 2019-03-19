import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getProducts, toggleProductMenu, removeProduct, toggleHideProduct } from "../../state/actions/productsActions"
import AddPlant from '../modals/AddPlant'
import Confirmation from '../modals/Confirmation'
import UserInfo from './UserProfile/UserInfo'

const UserProfile = props => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showRemovePlantModal, setShowRemovePlantModal] = useState()
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
  const toggleShowRemoveModal = (e) => {
    setShowRemovePlantModal(!showRemovePlantModal)
  }
  const toggleConfirmation = () => {
    setShowRemovePlantModal(!showRemovePlantModal)
  }
  const togglePlantMenu = (e) => {
    e.preventDefault()
    props.toggleProductMenu(e.target.id)
    setPlantInFocus(e.target.id)
    document.body.addEventListener("click", console.log("click"))
  }
  const toggleHideProduct = (e) => {
    props.toggleHideProduct({ id: plantInFocus })
  }


  const activePlantGrid =
    props.products && props.products.length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <h1>My active plants</h1>
        <div className="plant-grid">
          {props.products
            .filter(el => el.user === props.userData.userEmail)
            .filter(el => el.hidden === false)
            .reverse()
            .map((el, index) => (
              <div className="plant-card" key={el._id}>
                <img
                  className="plant-img"
                  alt={el.name}
                  src={"http://localhost:5000/plants/" + el.image}
                />
                <div onClick={togglePlantMenu} className={"image-menu"}><i id={el._id} className="fas fa-ellipsis-v"></i></div>
                <div className={el.toggleMenu ? 'image-menu-items' : "hide"}>
                  <div onClick={toggleShowRemoveModal}><p>Remove</p></div>
                  <div onClick={toggleHideProduct}><p>Hide</p></div>
                  <div><p>Edit</p></div>
                </div>
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

  const hiddenPlantGrid =
    props.products && props.products.length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <h1>My hidden plants</h1>
        <div className="plant-grid">
          {props.products
            .filter(el => el.user === props.userData.userEmail)
            .filter(el => el.hidden === true)
            .reverse()
            .map((el, index) => (
              <div className="plant-card" key={el._id}>
                <img
                  className="plant-img"
                  alt={el.name}
                  src={"http://localhost:5000/plants/" + el.image}
                />
                <div onClick={togglePlantMenu} className={"image-menu"}><i id={el._id} className="fas fa-ellipsis-v"></i></div>
                <div className={el.toggleMenu ? 'image-menu-items' : "hide"}>
                  <div onClick={toggleShowRemoveModal}><p>Remove</p></div>
                  <div><p>Inactivate</p></div>
                  <div><p>Edit</p></div>
                </div>
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
      <div className="profile-top">
        <button className="Btn btn-add-plant" onClick={addPlantHandler}>Add plant</button>
        <UserInfo />
      </div>
      {showAddModal ? <AddPlant showModal={addPlantHandler} /> : null}
      {showRemovePlantModal ? <Confirmation modalMessage="Are you sure you want to delete this plant?" showModal={toggleConfirmation} plant={plantInFocus} confirm={props.removeProduct} /> : null}
      {activePlantGrid}
      {hiddenPlantGrid}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.items.products,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { getProducts, toggleProductMenu, removeProduct, toggleHideProduct }
)(UserProfile)
