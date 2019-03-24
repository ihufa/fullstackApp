import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types'

const initialState = {
    modals: []
}

export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case OPEN_MODAL:
            let newModals = [...state.modals]
            newModals.push(action.payload)
            return {
                ...state,
                modals: newModals
            }
        case CLOSE_MODAL:
            let closedModals = [...state.modals]
            closedModals.pop()
            return {
                ...state,
                modals: closedModals
            }
        default:
            return {
                ...state
            }
    }
}