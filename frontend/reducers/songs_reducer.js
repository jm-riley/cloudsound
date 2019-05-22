import merge from 'lodash/merge';
import { RECEIVE_SONG } from '../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG:
      const newState = merge({}, state, { [action.song.id]: action.song });
      return newState;
    default:
      return state;
  }
};
