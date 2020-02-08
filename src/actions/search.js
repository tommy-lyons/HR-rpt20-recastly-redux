import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  // return a thunk (function) which will call searchYoutube with the search field query

  // return function() {
  //   var options = {
  //     key: YOUTUBE_API_KEY,
  //     q: q
  //   };
 // searchYouTube(options, changeVideoList);
  // };
  return (dispatch) => {

    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };
    // run the Youtube API get method, and pass in the below at the .done callback
    searchYouTube(options, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
      return data;
    });
  };
};

export default handleVideoSearch;
