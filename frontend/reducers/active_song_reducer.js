import { SET_ACTIVE_SONG_FILE, SET_ACTIVE_SONG, PLAY, PAUSE } from '../actions/song_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_ACTIVE_SONG_FILE:
      return merge({}, state, { songFile: action.song });
    case SET_ACTIVE_SONG:
      return merge({}, state, { song: action.song });
    case PLAY:
      return merge({}, state, { playing: true });
    case PAUSE:
      return merge({}, state, { playing: false });
    default:
      return state;
  }
};
