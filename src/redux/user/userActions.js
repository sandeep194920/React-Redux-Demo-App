import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// async action to fetch users. By making use of thunk, the fetchUsers function (this function doesn't have to be pure and can cause side-effects) 
// returns another function (instead of returning an action like other action creators)
export const fetchUsers = () => {
    return dispatch => {
        // this is to set the loading to true in redux while we fetch the data below
        dispatch(fetchUsersRequest);
        // requesting data from an api endpoint
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMessage = error.errorMessage
                dispatch(fetchUsersFailure(errorMessage))
            })
    }
}