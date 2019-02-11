import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, INITIATE_USER, CLEAR_USER, INVALID_LOGIN, UPDATE_PRODUCTS, GET_PRODUCTS, REMOVE_PRODUCTS } from '../actions/types'



const initialState = {
    itemArray: [],
    userData: "",
    userCreated: false,
    invalidLogin: false,
    products: []
}

export default function(state = initialState, action)  {
    console.log(action)
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                itemArray: action.payload,
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                userCreated: action.payload,
                invalidLogin: false

            }
        case DELETE_ITEM:
            return {
                ...state,
                itemArray: state.itemArray.filter(item => item._id !== action.payload)
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        case INITIATE_USER:
            return {
                ...state,
                userData: action.payload
            }
        case CLEAR_USER:
            return {
                ...state,
                userData: ""
            }
        case INVALID_LOGIN:
            return {
                ...state,
                invalidLogin: action.payload
            }
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }



            default:
            return state
    }
        
}
