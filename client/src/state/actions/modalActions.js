import { OPEN_MODAL, CLOSE_MODAL } from './types'

export const openModal = modal => dispatch => {
    console.log("openModal", modal)
    dispatch({
        type: OPEN_MODAL,
        payload: modal
    })
}
export const closeModal = () => dispatch => {
    console.log("closeModal")
    dispatch({
        type: CLOSE_MODAL
    })
}