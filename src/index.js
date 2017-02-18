// React components generate html which is added to the dropdown-menu
// React Library knows how to render components
// ReactDOM knows how to create components
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBO8ZHNa6_L78CefGExR3UD5TBOFa7lpoI';

// This function is a factory that creates an instance of this class
// using 'this' keyword inside a fat arrow function is slightly different
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Elements must be instantiated (an instance of them created) to render
// Use < /> self closing tag to instantiate
ReactDOM.render(<App />, document.querySelector('.container'));

// module.exports = {App};
