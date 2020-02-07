import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// video list
// current video
// search query
const initialState = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0],
  // searchQuery: ''
}

// is this always the same, is this the default?
export default function configureStore(initialState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
  );
}