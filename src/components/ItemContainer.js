import React from 'react'
import { connect } from 'react-redux'
// In this component, we need to display either the cake or the icecreams based on the props passed from the parent container
// So this container can be reused for both cakes and icecreams
// NOTE : You can implement this in your projects when you click on an item and display it's details. This can be used as the common container for the details 

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item} </h2>
        </div>
    )
}

// There can be a second parameter in mapStateToProps which makes this container common
const mapStateToProps = (state, ownProps) => {
    // we conditionally check if the cake prop is passed from the parent component. 
    // If yes, then we display cakes else we display icecreams

    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

    return {

        item: itemState
    }
}

export default connect(mapStateToProps)(ItemContainer) 
