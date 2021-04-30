import React, {Component} from 'react'
import HogDetails from './HogDetails';

export default class Hog extends Component {
    constructor() {
        super();
        this.state = {
            details: false,
        }
    }
    
    render() {
        return (
            <div className="pigContainer">
                {(this.state.details)? <HogDetails flipDetails={this.flipDetails} hog={this.props.hog}/> : this.generatePigTile(this.props.hog, this.props.index)}
            </div>
        )
    }

    flipDetails = () => {
        this.setState({
            details: !this.state.details,
        })
    }

    generatePigTile = hog => {
        return (
            <div className='pigTile' onClick={this.flipDetails}>
                <img src={hog.img} alt={hog.name}/>
            </div>
        );
    }
}