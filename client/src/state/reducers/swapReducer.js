import { REQUEST_SWAP, UPDATE_SWAPS } from '../actions/types'

const initialState = {
    swaps: []
}

export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case REQUEST_SWAP:
            let newSwaps = [...state.swaps]
            newSwaps.push(action.payload)
            return {
                ...state,
                swaps: newSwaps
            }
        case UPDATE_SWAPS:
            return {
                ...state,
                swaps: action.payload
            }
        default:
            return {
                ...state
            }
    }
}