import { RECEIVE_SONG_ERRORS, REMOVE_SONG_ERRORS } from '../actions/song_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG_ERRORS:
      return action.errs;
    case REMOVE_SONG_ERRORS:
      return [];
    default:
      return state;
  }
};
