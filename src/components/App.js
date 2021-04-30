import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filters from './Filters';
import PigList from './PigList';

const filterFunctions = {
  'all': hog => true,
  'greased': hog => hog.greased,
  'ungreased': hog => !hog.greased,
}

const sortFunctions = {
  'none': (x, y) => 0,
  'name': (x, y) => x.name < y.name,
  'weight': (x, y) => x.weight - y.weight,
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'all',
      sort: 'none',
      hogs: [],
    }
  }

  componentDidMount() {
    let hogsWithImages = hogs.map(this.getHogImages);
    this.setState({
      hogs: hogsWithImages,
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filters updateFilter={this.updateFilter} updateSort={this.updateSort} />
        <PigList hogs={this.applySortAndFilter()} />
      </div>
    );
  }

  applySortAndFilter = () => {
    return (
      this.state.hogs.filter(filterFunctions[this.state.filter])
      .sort(sortFunctions[this.state.sort])
    );
  }

  updateFilter = filter => {
    this.setState({
      filter: filter,
    })
  }

  updateSort = sort => {
    this.setState({
      sort: sort,
    })
  }

  getHogImages = hog => {
    hog.img = require(`../hog-imgs/${hog.name.toLowerCase().split(" ").join("_")}.jpg`);
    return hog;
  }
}

export default App;
