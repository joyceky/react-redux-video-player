// import react and pull component module, and set to component var
import React, { Component } from 'react';

class SearchBar extends Component {
// how we initialize state
// only class components have state, not functional components
// constructor performs component setup, eg state & var initalization
// we only use this.state = in constructor
// Anywhere else use this.setState() to maintain continuity
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render() {
// html elements emit change elements when users interact
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
   }

 onInputChange(term) {
   this.setState({term});
   this.props.onSearchTermChange(term);
 }
}

export default SearchBar;
