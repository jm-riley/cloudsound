import { SET_ACTIVE_SONG } from '../actions/song_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_ACTIVE_SONG:
      return action.song;
    default:
      return state;
  }
};
