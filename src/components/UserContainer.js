import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) { // getting these props from the mapStoP and mapDtoP

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? (<h2>Loading....</h2>) : userData.error ? (<h2>{userData.error}</h2>) : (
        <div>
            <h2>Users List</h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user => <p>{user.name}</p>)

                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)




/*
// STEPS IN PERFORMING ASYNC TASK WITH REACT-REDUX

1. Add thunk middleware in the store. This allows an action creator to return a function instead of an action object.
   The function now can perform side effects such as fetching data. This function can also dispatch regular actions
   based on the response.

2. These actions are then handled by reducer which updates the redux state.

3. When the state is updated, the component subscribed to the state changes will receive the updated state that can
   be used in JSX.


RECOMMENDED READ :

redux-axios middeleware document  - https://github.com/svrcekmichal/redux-axios-middleware,
redux persist npm packages  - https://www.npmjs.com/package/redux-axios-middleware

This might be helpful in your apps further

*/