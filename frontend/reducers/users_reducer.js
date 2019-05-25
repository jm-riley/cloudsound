import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_CURRENT_USER } from '../actions/user_actions';
import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_SONG:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_SONGS:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};
