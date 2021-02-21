import React, { useState } from 'react'
import { buyCake } from '../redux'; //action creator used to dispatch the action
import { connect } from 'react-redux';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

// gets redux state as a parameter and returns an object
// maps redux state to our component's props. In addition to the props this component was receiving, it will now receive this prop, numOfCakes as well 
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
// gets redux's dispatch method as parameter and returns an object
// maps the dispatch of an action creator to a prop in our component. Our component now receives a second prop called buyCake which will dispatch the buyCake action
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}
//connects react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);


