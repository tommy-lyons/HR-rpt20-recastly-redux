import React from 'react';
import SearchContainer from '../containers/SearchContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';

var App = function() {
  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <SearchContainer />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayerContainer />
        </div>
        <div className="col-md-5">
          <VideoListContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
