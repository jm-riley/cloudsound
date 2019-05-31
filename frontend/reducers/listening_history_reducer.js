import { RECEIVE_LISTENING_HISTORY } from '../actions/user_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTENING_HISTORY:
      return action.songs;
    default:
      return state;
  }
};
