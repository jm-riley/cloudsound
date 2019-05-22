import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id };
    case LOGOUT_CURRENT_USER:
      return { id: null };
    default:
      return state;
  }
};
