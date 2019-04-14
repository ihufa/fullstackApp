import {
  REQUEST_SWAP,
  UPDATE_SWAPS,
  ACCEPT_SWAP,
  DELETE_SWAP,
  ADD_MESSAGE,
  SEE_MESSAGE
} from "../actions/types"

const initialState = {
  swaps: []
}

export default function(state = initialState, action) {
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
    case ACCEPT_SWAP:
      let index = state.swaps.map(prod => prod._id).indexOf(action.payload) // find index of product to toggle
      let acceptSwaps = state.swaps.map((item, idx) => {
        // create new array without mutating
        if (idx !== index) {
          return item
        }
        return {
          ...item,
          accepted: true
        }
      })
      return {
        ...state,
        swaps: acceptSwaps
      }

    case DELETE_SWAP:
      return {
        ...state,
        swaps: state.swaps.filter(prod => prod._id !== action.payload)
      }
    case ADD_MESSAGE:
      let relevantSwapIndex = state.swaps
        .map(swap => swap._id)
        .indexOf(action.payload.id)
      let newMessages = state.swaps[relevantSwapIndex].messages.concat({
        message: action.payload.message,
        sender: action.payload.sender,
        time: action.payload.time
      })
      let newMessageSwaps = [...state.swaps]
      newMessageSwaps[relevantSwapIndex].messages = newMessages
      return {
        ...state,
        swaps: newMessageSwaps
      }
    case SEE_MESSAGE:
      let swapIdx = state.swaps.map(swap => swap._id).indexOf(action.payload.id)
      let newSwaps0 = [...state.swaps]
      newSwaps0[swapIdx].seenByRequester = true
      newSwaps0[swapIdx].seenByReceiver = true
      return {
        ...state,
        swaps: newSwaps0
      }
    default:
      return {
        ...state
      }
  }
}
