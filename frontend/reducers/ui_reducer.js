import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import modalReducer from './modal_reducer';
import activeSongReducer from './active_song_reducer';
import liseningHistoryReducer from './listening_history_reducer';

export default combineReducers({
  errors: errorsReducer,
  modal: modalReducer,
  activeSong: activeSongReducer,
  listeningHistory: liseningHistoryReducer
});
