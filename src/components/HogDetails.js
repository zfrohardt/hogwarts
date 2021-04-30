import React from 'react'

const HogDetails = props => {
    return (
        <div className="pigTile" onClick={() => props.flipDetails()}>
            <h3>{props.hog.name}</h3>
            <p>{props.hog.weight}</p>
            <p>Specialty: {props.hog.specialty}</p>
            <p>Highest Medal Achieved: {props.hog['highest medal achieved']}</p>
        </div>
    );
}

export default HogDetails;