import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  addProduct,
  getUserProducts
} from "../../state/actions/productsActions"
import ReactCrop from "react-image-crop/dist/ReactCrop"
import "react-image-crop/dist/ReactCrop.css"
import { ZIPS } from "../../zips"

const AddPlant = props => {
  const [plantName, setPlantName] = useState()
  const [plantDescription, setPlantDescription] = useState()
  const [plantFree, setPlantFree] = useState(false)
  const [plantSapling, setPlantSapling] = useState(false)
  const [plantImgUrl, setPlantImgUrl] = useState()
  const [plantImg, setPlantImg] = useState()
  const [plantImgElement, setPlantImgElement] = useState()
  const [croppedImage, setCroppedImage] = useState()
  const [long, setLong] = useState()
  const [lat, setLat] = useState()

  const [crop, setCrop] = useState({
    aspect: 1,
    width: 50,
    x: 0,
    y: 0
  })

  useEffect(() => {
    if (ZIPS) {
      let city = ZIPS.filter(el => el.zip === props.userData.userZip)[0]
      setLong(city.long)
      setLat(city.lat)
      console.log(city)
    }
  }, [])

  const addPlant = async e => {
    e.preventDefault()
    console.log("croppedImage", croppedImage)
    let body = new FormData()
    body.append("productImage", croppedImage)
    body.append("name", plantName)
    body.append("message", plantDescription)
    body.append("userId", props.userData.userId)
    body.append("userName", props.userData.userName)
    body.append("zip", props.userData.userZip)
    body.append("free", plantFree)
    body.append("sappling", plantSapling)
    body.append("userCity", props.userData.userCity)
    body.append("long", long)
    body.append("lat", lat)
    props.addProduct(body)
    props.showModal()
  }
  //figure out how to make universal onChange to set state without setState()
  const onChangeImg = e => {
    setPlantImg(e.target.files[0])
    console.log(plantImg)
  }
  useEffect(() => {
    if (plantImg) {
      setPlantImgUrl(window.URL.createObjectURL(plantImg))
      console.log(plantImgUrl)
    }
  }, [plantImg])
  const onChangeDescription = e => {
    setPlantDescription(e.target.value)
  }
  const onChangeName = e => {
    setPlantName(e.target.value)
  }

  const onChangeSapling = e => {
    setPlantSapling(e.target.value)
  }

  const closeModal = e => {
    console.log(e.target.className)
    if (
      e.target.className === "modal" &&
      e.target.className !== "modal-input"
    ) {
      props.showModal()
    }
  }

  // Extract image crop
  const onImageLoaded = (image, pixelCrop) => {
    setPlantImgElement(image)
  }

  const onCropComplete = (crop, pixelCrop) => {
    test(plantImgElement, pixelCrop, "Plant")
  }

  const onCropChange = crop => {
    setCrop(crop)
  }

  function getCroppedImg(image, pixelCrop, fileName) {
    console.log("image: ", image)
    const canvas = document.createElement("canvas")
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext("2d")

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        blob.name = fileName
        resolve(blob)
      }, "image/jpeg")
    })
  }

  const test = async (image, pixelCrop, fileName) => {
    console.log(
      "image: ",
      image,
      "pixelCrop: ",
      pixelCrop,
      "fileName: ",
      fileName
    )
    let cropped
    if (image && pixelCrop.width && pixelCrop.height)
      cropped = await getCroppedImg(image, pixelCrop, fileName)
    setCroppedImage(cropped)
    console.log(croppedImage)
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-plant-upload">
        <h2>Add a plant</h2>
        <div className="plant-img-upload">
          <form className="plant-upload-form" onSubmit={addPlant}>
            <input
              className="add-file-btn"
              onChange={onChangeImg}
              type="file"
            />
            {plantImg ? (
              <ReactCrop
                src={plantImgUrl}
                crop={crop}
                onChange={onCropChange}
                onImageLoaded={onImageLoaded}
                onComplete={onCropComplete}
                className="imgCrop"
              />
            ) : null}
            <p>
              <span>*Plant type</span>
              <input
                onChange={onChangeName}
                type="text"
                placeholder="species or common name"
              />
            </p>
            <p>
              <span>Description</span>
              <input
                onChange={onChangeDescription}
                type="text"
                placeholder="description"
              />
            </p>
            <div>
              <input type="checkbox" onChange={onChangeSapling} />
              <span>I am only offering a cutting of this plant</span>
            </div>
            <input className="submit-plant-btn" type="submit" value="Add!" />
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { addProduct, getUserProducts }
)(AddPlant)
