import React from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  togglePlay(audio) {
    const { playing } = this.state;
    // playing ? audio.pause() : audio.play();
    this.setState({ playing: !playing }, () => {
      playing ? audio.pause() : audio.play();
    });
  }
  render() {
    const { song, user } = this.props;
    const { playing } = this.state;
    let playbackIcon = playing ? (
      <i class="fas fa-pause-circle" />
    ) : (
      <i class="fas fa-play-circle" />
    );
    if (!song) return null;
    const { description, photoUrl, songUrl, title } = song;
    const audio = new Audio(songUrl);
    return (
      <div>
        <div className="song-page-hero">
          <div className="play-section">
            <div className="play-button" onClick={() => this.togglePlay(audio)}>
              {playbackIcon}
            </div>
            <div className="song-page-song-info">
              <span class="song-username">{user.username}</span>
              <p class="song-title">{title}</p>
            </div>
          </div>
          <div className="song-artwork">
            <img src={photoUrl} alt="song-artwork" />
          </div>
        </div>
      </div>
    );
  }
}

const mstp = (state, ownProps) => ({
  song: state.entities.songs[ownProps.match.params.songId],
  user: state.entities.users[ownProps.match.params.userId]
});

const mdtp = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mstp,
  mdtp
)(SongShow);
