import React, {Component} from 'react'
import Hog from './Hog';

export default class PigList extends Component {
    constructor() {
        super();
        this.state = {
            details: false,
        }
    }

    render() {
        return (
            <div>
                {this.props.hogs.map((hog, index) => {
                    return <Hog key={index} hog={hog} />
                })}
            </div>
        );
    }
}