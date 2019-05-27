import { SET_ACTIVE_SONG_FILE, SET_ACTIVE_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_ACTIVE_SONG_FILE:
      return merge({}, state, { songFile: action.song });
    case SET_ACTIVE_SONG:
      return merge({}, state, { song: action.song });
    default:
      return state;
  }
};
