import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
      return data;
    });
  };
};

export default handleVideoSearch;
