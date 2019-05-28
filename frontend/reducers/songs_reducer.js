import merge from 'lodash/merge';
import {
  RECEIVE_SONG,
  RECEIVE_SONGS,
  REMOVE_SONG,
  RECEIVE_USER_SONGS
} from '../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SONG:
      newState = merge({}, state, { [action.song.id]: action.song });
      return newState;
    case RECEIVE_SONGS:
      return action.songs.songs;
    case RECEIVE_USER_SONGS:
      if (action.songs) {
        return action.songs;
      } else return {};
    case REMOVE_SONG:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
