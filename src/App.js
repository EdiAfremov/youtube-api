import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetails';
import _ from 'lodash';
import './App.css';
const API_KEY = 'AIzaSyCS_wgWHG4ZCEmVRIJcukvUpFladvmuaBY'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('2pac')

  }
  videoSearch = (term) => {
    YTsearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term), 300 })

    return (
      <div>
        <header className="header">
          <SearchBar onSearchTermChange={ videoSearch } />
        </header>
        <div className="container">
          <div className="media-container">
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList
              onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }
              videos={ this.state.videos }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
