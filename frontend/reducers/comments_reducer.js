import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.comment.id]: action.comment.comment });
    case RECEIVE_COMMENTS:
      if (!action.comments.comments) return {};
      return action.comments.comments;
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
