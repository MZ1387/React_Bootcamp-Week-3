import { combineReducers } from 'redux';

import songsReducer from './songs';
import toolbarReducer from './toolbar';

export default combineReducers({
  songs: songsReducer,
  toolbar: toolbarReducer
});
