import React from 'react';
import { connect } from 'react-redux';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import { openModal } from '../../actions/modal_actions';
import SongUpdateModal from './song_update_modal';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchSong(this.props.match.params.songId)
      .then(() => this.setState({ song: new Audio(this.props.song.songUrl) }));
  }

  togglePlay() {
    const { playing, song } = this.state;
    // playing ? audio.pause() : audio.play();
    this.setState({ playing: !playing }, () => {
      // playing ? audio.pause() : audio.play();
      if (playing) {
        song.pause();
      } else song.play();
    });
  }

  handleDelete() {
    const { deleteSong, song } = this.props;
    deleteSong(song.id).then(() => this.props.history.push('/discover'));
  }
  render() {
    const { song, user, currentUser, openModal } = this.props;
    const { playing } = this.state;
    let playbackIcon = playing ? (
      <i className="fas fa-pause-circle" />
    ) : (
      <i className="fas fa-play-circle" />
    );
    if (!song) return null;
    const { description, photoUrl, songUrl, title } = song;
    if (this.state.song) {
      this.state.song.onended = e => {
        this.setState({ playing: false });
      };
    }
    let photo = song.photoUrl
      ? song.photoUrl
      : 'http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square-300x300.png';
    let editButtons;
    if (song.user_id === currentUser) {
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
    return (
      <div className="song-page-container">
        <div className="song-page-content">
          <div className="song-page-hero">
            <div className="play-section">
              <div className="play-button" onClick={this.togglePlay}>
                {playbackIcon}
              </div>
              <div className="song-page-song-info">
                <span className="song-username">{user.username}</span>
                <p className="song-title">{title}</p>
              </div>
            </div>
            <div className="song-artwork">
              <img src={photo} alt="song-artwork" />
            </div>
            <div className="waveform" />
          </div>
          <div className="comment-form">
            <input type="text" className="comment-input" placeholder="Write a comment" />
          </div>
          {editButtons}
        </div>
        <SongUpdateModal song={song} />
      </div>
    );
  }
}

const mstp = (state, ownProps) => ({
  song: state.entities.songs[ownProps.match.params.songId],
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.session.id
});

const mdtp = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  openModal: type => dispatch(openModal(type)),
  deleteSong: id => dispatch(deleteSong(id))
});

export default connect(
  mstp,
  mdtp
)(SongShow);
