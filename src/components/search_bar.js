// import react and pull component module, and set to component var
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
// html elements emit change elements when users interact
    return <input onChange={this.onInputChange}/>;
  }

  onInputChange() {

  }
 }

export default SearchBar;
