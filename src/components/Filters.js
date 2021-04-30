import React, {Component} from 'react'

export default class Filters extends Component {
    render() {
        return (
            <div>
                <form onChange={event => this.props.updateFilter(event.target.value)}>
                    <label htmlFor='radio-all' >All</label>
                    <input type='radio' name='greased' value='all' id='radio-all' defaultChecked />
                    <label htmlFor='radio-greased' >Greased</label>
                    <input type='radio' name='greased' value='greased' id='radio-greased' />
                    <label htmlFor='radio-greased' >Ungreased</label>
                    <input type='radio' name='greased' value='ungreased' id='radio-ungreased' />
                </form>
                <form onChange={event => this.props.updateSort(event.target.value)}>
                    <select defaultValue='all'>
                        <option value='none' >None</option>
                        <option value='name' >Name</option>
                        <option value='weight' >Weight</option>
                    </select>
                </form>
            </div>
        );
    }
}