import React from 'react'
import { buyIceCream } from '../redux'; //action creator used to dispatch the action
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

// gets redux state as a parameter and returns an object
// maps redux state to our component's props. In addition to the props this component was receiving, it will now receive this prop, numOfIceCreams as well 
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
// gets redux's dispatch method as parameter and returns an object
// maps the dispatch of an action creator to a prop in our component. Our component now receives a second prop called buyIceCream which will dispatch the buyIceCream action
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
//connects react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);


