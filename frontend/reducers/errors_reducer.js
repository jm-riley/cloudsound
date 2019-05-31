import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer';
import songErrorsReducer from './song_errors_reducer';

export default combineReducers({
  user: userErrorsReducer,
  song: songErrorsReducer
});
