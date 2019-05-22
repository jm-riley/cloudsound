import * as UsersApiUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errs => {
  return {
    type: RECEIVE_USER_ERRORS,
    errs: errs.responseJSON
  };
};

export const login = user => dispatch =>
  UsersApiUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveUserErrors(err))
  );

export const signup = user => dispatch =>
  UsersApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveUserErrors(err))
  );

export const logout = () => dispatch =>
  UsersApiUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    err => dispatch(receiveUserErrors(err))
  );

export const fetchUser = id => dispatch =>
  UsersApiUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveUserErrors(err))
  );