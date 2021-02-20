import React from 'react'
// this demonstrates how we use hooks for react-redux which was introduced in react-redux version 7.1


// useSelector hook is the close equivalent to the mapStateToProps function
import { useSelector } from 'react-redux'

function HooksCakeContainer() {

    // useSelector receives an function argument called selector function. 
    // This selector function receives the redux state as the argument and can return a value (just like mapStateToProps)
    const numOfCakes = useSelector(state => state.numOfCakes);

    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button>Buy Cake</button>
        </div>
    )
}


export default HooksCakeContainer
