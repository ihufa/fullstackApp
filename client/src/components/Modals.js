import React from 'react'
import { connect } from 'react-redux'
import Confirmation from './modals/Confirmation'
import PlantInfo from './modals/PlantInfo'
import { closeModal } from '../state/actions/modalActions'
import { changeEmail, changeZip } from '../state/actions/itemActions'
import { withRouter } from "react-router-dom";
import { removeProduct, getUserProducts } from '../state/actions/productsActions'


const Modals = props => {

    const frontPageRedirect = () => {
        props.closeModal()
        props.history.push("/plants")
    }
    const addPlantCloseModal = () => {
        console.log("addPlant modal closed")
        props.getUserProducts(props.userData.userId)        //fetch products again to show the newly added plant
        props.closeModal()
    }

    return (
        <div>
            {props.modals[0] && props.modals[0].type === "emailChanger" ? <Confirmation type="emailChanger" id={props.modals[0].id} confirm={props.changeEmail} message={props.modals[0].message} input={props.modals[0].input} binary={props.modals[0].binary} closeModal={props.closeModal} /> : null}
            {props.modals[0] && props.modals[0].type === "zipChanger" ? <Confirmation type="zipChanger" id={props.modals[0].id} confirm={props.changeZip} message={props.modals[0].message} input={props.modals[0].input} binary={props.modals[0].binary} closeModal={props.closeModal} /> : null}
            {props.modals[0] && props.modals[0].type === "productRemover" ? <Confirmation type={props.modals[0].type} id={props.modals[0].id} confirm={props.removeProduct} message={props.modals[0].message} binary={props.modals[0].binary} closeModal={props.closeModal} /> : null}
            {props.modals[0] && props.modals[0].type === "confirmationFrontpage" ? <Confirmation type={props.modals[0].type} message={props.modals[0].message} binary={props.modals[0].binary} closeModal={frontPageRedirect} /> : null}
            {props.modals[0] && props.modals[0].type === "error" ? <Confirmation type={props.modals[0].type} id={props.modals[0].id} message={props.modals[0].message} binary={props.modals[0].binary} closeModal={props.closeModal} /> : null}
            {props.modals[0] && props.modals[0].type === "plantInfo" ? <PlantInfo productId={props.modals[0].productId} userEmail={props.modals[0].userEmail} image={props.modals[0].image} plantType={props.modals[0].plantType} description={props.modals[0].description} userName={props.modals[0].userName} userCity={props.modals[0].userCity} time={props.modals[0].time} free={props.modals[0].free} sapling={props.modals[0].sapling} closeModal={props.closeModal} userId={props.modals[0].userId} /> : null}
            {props.modals[0] && props.modals[0].type === "confirmationPlantAdd" ? <Confirmation message={props.modals[0].message} binary={props.modals[0].binary} closeModal={addPlantCloseModal} /> : null}
            {props.modals[0] && props.modals[0].type === "confirmation" ? <Confirmation message={props.modals[0].message} binary={props.modals[0].binary} closeModal={props.closeModal} /> : null}



        </div>
    )
}

const mapStateToProps = state => ({
    modals: state.modals.modals,
    userData: state.items.userData
})

export default withRouter(connect(mapStateToProps, { closeModal, changeEmail, changeZip, removeProduct, getUserProducts })(Modals))
