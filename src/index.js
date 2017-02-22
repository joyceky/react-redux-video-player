import _ from 'lodash';

// React components generate html which is added to the dropdown-menu
// React Library knows how to render components
// ReactDOM knows how to create components
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBO8ZHNa6_L78CefGExR3UD5TBOFa7lpoI';

// This function is a factory that creates an instance of this class
// using 'this' keyword inside a fat arrow function is slightly different
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
   };

   this.videoSearch('cute baby animals');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
           onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
           videos={ this.state.videos } />
      </div>
    );
  }
}

// Elements must be instantiated (an instance of them created) to render
// Use < /> self closing tag to instantiate
ReactDOM.render(<App />, document.querySelector('.container'));

module.exports = {App};
