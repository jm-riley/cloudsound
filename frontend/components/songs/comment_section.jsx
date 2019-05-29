import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';

const CommentSection = ({ user, users, comments, currentUser, deleteComment }) => {
  let artistAvatar = user.avatarUrl ? <img src={user.avatarUrl} alt="" /> : null;
  if (!comments) return null;
  return (
    <div className="comment-section-container">
      <div className="comment-section-left">
        <div className="comment-section-artist">
          <Link to={`/users/${user.id}`}>
            <div className="comment-artist-avatar">{artistAvatar}</div>
            <p>{user.username}</p>
          </Link>
        </div>
      </div>
      <div className="comment-section-right">
        {comments.map((comment, i) => {
          let user = users[comment.user_id];
          let userAvatar = user.avatarUrl ? <img src={user.avatarUrl} alt="" /> : null;
          return (
            <div className="comment-container" key={i}>
              <div className="comment-content">
                <Link to={`/users/${user.id}`}>
                  <div className="comment-user-avatar">{userAvatar}</div>
                </Link>
                <div className="comment-detail">
                  <Link to={`/users/${user.id}`}>
                    <div className="comment-username">{user.username}</div>
                  </Link>
                  <p>{comment.body}</p>
                </div>
              </div>
              {comment.user_id === currentUser && (
                <div className="comment-delete" onClick={() => deleteComment(comment.id)}>
                  <i className="fas fa-trash-alt" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mstp = state => ({
  comments: Object.values(state.entities.comments),
  users: state.entities.users,
  currentUser: state.session.id
});

const mdtp = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mstp,
  mdtp
)(CommentSection);
