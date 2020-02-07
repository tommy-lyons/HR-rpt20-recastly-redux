import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// video list
// current video
// search query
const initialState = {
  videoList: exampleVideoData,
  currentVideo: null
  // searchQuery: ''
}
console.log(rootReducer);
var store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
// ^^ this version now passes STORE tests and does not break test page

// CODE BELOW DOES NOT PASS STORE TESTS BUT ALSO DOES NOT BREAK TEST PAGE
// export default function configureStore(initialState) {
//   return createStore(
//       rootReducer,
//       initialState,
//       applyMiddleware(thunk)
//   );
// }