import React from 'react'
import { buyCake } from '../redux'; //action creator used to dispatch the action
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// gets redux state as a parameter and returns an object
// maps redux state to our component's props. In addition to the props this component was receiving, it will now receive this prop, numOfCakes as well 
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}
// gets redux's dispatch method as parameter and returns an object
// maps the dispatch of an action creator to a prop in our component. Our component now receives a second prop called buyCake which will dispatch the buyCake action
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);


