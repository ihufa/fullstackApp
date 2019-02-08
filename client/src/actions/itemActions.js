import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, INITIATE_USER, CLEAR_USER, INVALID_LOGIN } from './types'
import axios from 'axios'


export const clearUser = () => dispatch => {
    dispatch({
        type: CLEAR_USER
    })
}

export const checkItem = (item) => dispatch => {
    console.log(item)
    axios.post('/users/login', item)
    .then(res => 
        {dispatch({
            type: INITIATE_USER,
            payload: res.data.user
        })
        sessionStorage.setItem("token", "Bearer " + res.data.securityToken)}
        )
    .catch(err => {
        dispatch({
            type: INVALID_LOGIN,
            payload: err.response.data
        })
    })
}

export const getItems = () => dispatch => {
    console.log("getItems...")
    axios
        .get('/users', {headers: {authorization: sessionStorage.token}} )
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))

}

export const deleteItem = (id) => dispatch => {
    console.log('deleteItem...')
    dispatch({
        type: DELETE_ITEM,
        payload: id
    })
    axios
        .delete('/users', {data: {_id: id}})

}

export const clearUserCreated = () => dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: false
    })
}

export const addItem = (item) => dispatch => {
    
    axios.post('/users', item)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("error: "+err.response.data)
            dispatch({
                type: INVALID_LOGIN,
                payload: err.response.data
            })
        })
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}