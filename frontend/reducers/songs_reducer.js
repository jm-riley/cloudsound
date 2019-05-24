import merge from 'lodash/merge';
import { RECEIVE_SONG, REMOVE_SONG } from '../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SONG:
      newState = merge({}, state, { [action.song.id]: action.song });
      return newState;
    case REMOVE_SONG:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
