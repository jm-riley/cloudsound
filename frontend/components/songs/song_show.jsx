import React from 'react';
import { connect } from 'react-redux';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import SongUpdateModal from './song_update_modal';
import PlayButton from './play_button';
import CommentForm from './comment_form';
import CommentSection from './comment_section';
import { Link } from 'react-router-dom';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props
      .fetchSong(this.props.match.params.songId)
      .then(() => this.props.fetchComments(this.props.match.params.songId));
  }

  handleDelete() {
    const { deleteSong, song, user } = this.props;
    deleteSong(song.id).then(() => this.props.history.push(`/users/${user.id}`));
  }
  render() {
    const { song, user, currentUserId, currentUser, openModal, createComment } = this.props;
    // if (!this.state.song) return null;
    if (!song || !user) return null;
    const { photoUrl, title } = song;

    let photo = photoUrl ? photoUrl : window.songPlaceholderPhoto;

    let editButtons;
    if (song.user_id === currentUserId) {
      editButtons = (
        <div className="edit-buttons">
          <button className="edit-button" onClick={() => openModal('update')}>
            <i className="fas fa-pencil-alt" />
            Edit
          </button>
          <button className="edit-button" onClick={this.handleDelete.bind(this)}>
            <i className="fas fa-trash-alt" />
            Delete
          </button>
        </div>
      );
    }
    let userAvatar;
    if (currentUser) {
      userAvatar = currentUser.avatarUrl ? <img src={currentUser.avatarUrl} /> : null;
    }
    return (
      <div className="song-page-container">
        <div className="song-page-content">
          <div className="song-page-hero">
            <div className="play-section">
              <PlayButton song={this.props.song} />
              <div className="song-page-song-info">
                <span className="song-username">
                  <Link to={`/users/${user.id}`}>{user.username}</Link>
                </span>
                <p className="song-title">{title}</p>
              </div>
            </div>
            <div className="song-artwork">
              <img src={photo} alt="song-artwork" />
            </div>
            <div className="waveform" />
          </div>
          <div className="song-page-left">
            <div className="song-page-interaction">
              {!!currentUserId && (
                <div className="comment-form-container">
                  <div className="user-avatar">{userAvatar}</div>
                  <CommentForm createComment={createComment} songId={song.id} />
                </div>
              )}
              {editButtons}
            </div>
            <CommentSection user={user} song={song} />
          </div>
          <div className="song-page-right" />
        </div>
        <SongUpdateModal song={song} />
      </div>
    );
  }
}

const mstp = (state, ownProps) => ({
  song: state.entities.songs[ownProps.match.params.songId],
  user: state.entities.users[ownProps.match.params.userId],
  currentUserId: state.session.id,
  currentUser: state.entities.users[state.session.id]
});

const mdtp = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  openModal: type => dispatch(openModal(type)),
  deleteSong: id => dispatch(deleteSong(id)),
  fetchComments: songId => dispatch(fetchComments(songId)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mstp,
  mdtp
)(SongShow);
