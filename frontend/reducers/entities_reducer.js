import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';

export default combineReducers({
  users: usersReducer,
  songs: songsReducer
});
