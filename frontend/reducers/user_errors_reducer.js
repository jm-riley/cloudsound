import {
  RECEIVE_USER_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_USER,
  LOGOUT_CURRENT_USER
} from '../actions/user_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errs;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_USER:
      return [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
