import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveCommentErrors = errs => ({
  type: RECEIVE_COMMENT_ERRORS,
  errs
});

const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
});

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errs => dispatch(receiveCommentErrors(errs))
  );
};

export const fetchComments = songId => dispatch => {
  return CommentApiUtil.fetchComments(songId).then(
    comments => dispatch(receiveComments(comments)),
    errs => dispatch(receiveCommentErrors(errs))
  );
};

export const deleteComment = id => dispatch => {
  return CommentApiUtil.deleteComment(id).then(
    () => dispatch(removeComment(id)),
    errs => dispatch(receiveCommentErrors(errs))
  );
};
