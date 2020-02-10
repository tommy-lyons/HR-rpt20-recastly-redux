import Redux from 'redux';

// Our Version
// var videoListReducer = (state = [], action) => {
//   //TODO: define a reducer for the videoList field of our state.
//   switch (action.type) {
//   case 'CHANGE_VIDEO_LIST':
//     return action.videos;
//   default:
//     return state;
//   }
// };

// Solution Video Version
var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    // pipes
    return action.videos || [];
  default:
    return state;
  }
};

export default videoListReducer;
