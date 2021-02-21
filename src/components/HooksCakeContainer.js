import React from 'react'
// this demonstrates how we use hooks for react-redux which was introduced in react-redux version 7.1


// useSelector hook is the close equivalent to the mapStateToProps function
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {

    // useSelector receives an function argument called selector function. 
    // This selector function receives the redux state as the argument and can return a value (just like mapStateToProps)
    const numOfCakes = useSelector(state => state.numOfCakes);

    // useDispatch hook returns a reference to the dispatch function from the redux store 
    const dispatch = useDispatch() // can be used to dispatch actions as needed

    // for sure, we got rid of connect hoc by using useDispatch and useSelector but there are few usage warnings 
    // given in the documentation, please refer that before writing the hooks code instead of connect hoc

    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}


export default HooksCakeContainer
