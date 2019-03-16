import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addProduct } from "../../state/actions/productsActions"
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const AddPlant = props => {

    const [plantName, setPlantName] = useState()
    const [plantDescription, setPlantDescription] = useState()
    const [plantFree, setPlantFree] = useState(false)
    const [plantSapling, setPlantSapling] = useState(false)
    const [plantImgUrl, setPlantImgUrl] = useState()
    const [plantImg, setPlantImg] = useState()
    const [plantImgElement, setPlantImgElement] = useState()

    const [crop, setCrop] = useState({
        aspect: 1,
        width: 50,
        x: 0,
        y: 0,
    })

    let croppedImage = ""

    const addPlant = async (e) => {
        e.preventDefault()
        console.log("croppedImage", croppedImage)
        let body = new FormData()
        body.append("productImage", croppedImage)
        body.append("name", plantName)
        body.append("message", plantDescription)
        body.append("user", props.userData.userEmail)
        body.append("zip", props.userData.userZip)
        body.append("free", plantFree)
        body.append("sappling", plantSapling)

        props.addProduct(body)
    }
    //figure out how to make universal onChange to set state without setState()
    const onChangeImg = (e) => {
        setPlantImg(e.target.files[0])
        console.log(plantImg)
    }
    useEffect(() => {
        if (plantImg) {
            setPlantImgUrl((window.URL.createObjectURL(plantImg)))
            console.log(plantImgUrl)
        }
    }
        , [plantImg])
    const onChangeDescription = e => {
        setPlantDescription(e.target.value)
    }
    const onChangeName = e => {
        setPlantName(e.target.value)
    }
    const onChangeFree = e => {
        setPlantFree(e.target.value)
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
    };

    const onCropComplete = (crop, pixelCrop) => {

        test(plantImgElement, pixelCrop, "Plant")
    };

    const onCropChange = crop => {
        setCrop(crop)
    };


    function getCroppedImg(image, pixelCrop, fileName) {
        console.log("image: ", image)
        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');

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
        );

        // As Base64 string
        // const base64Image = canvas.toDataURL('image/jpeg');

        // As a blob
        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                blob.name = fileName;
                resolve(blob);
            }, 'image/jpeg');
        });
    }

    const test = async (image, pixelCrop, fileName) => {
        console.log("image: ", image, "pixelCrop: ", pixelCrop, "fileName: ", fileName)
        if (image && pixelCrop.width && pixelCrop.height)
            croppedImage = await getCroppedImg(image, pixelCrop, fileName);
        console.log(croppedImage)
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-plant-upload">
                <h1>Add a plant so you can swap!</h1>
                <div className="plant-img-upload">
                    <form className="plant-upload-form" onSubmit={addPlant}>
                        <input onChange={onChangeImg} type="file" />
                        <input
                            onChange={onChangeDescription}
                            type="text"
                            placeholder="description"
                        />
                        {plantImg ?
                            <ReactCrop
                                src={plantImgUrl}
                                crop={crop}
                                onChange={onCropChange}
                                onImageLoaded={onImageLoaded}
                                onComplete={onCropComplete}
                                className="imgCrop"

                            /> : null}
                        <input onChange={onChangeName} type="text" placeholder="name" />
                        <div><input type="checkbox" onChange={onChangeSapling} /><span>I am only offering a sapling of this plant</span></div>
                        <div><input type="checkbox" onChange={onChangeFree} /><span>I want to give away this baby for free</span></div>
                        <input type="submit" value="Share!" />
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
    { addProduct }
)(AddPlant)