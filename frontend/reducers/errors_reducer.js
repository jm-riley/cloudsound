import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer';

export default combineReducers({
  user: userErrorsReducer
});
