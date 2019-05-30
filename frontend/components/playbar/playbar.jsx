import React from 'react';
import { connect } from 'react-redux';
import { pause, fetchSong } from '../../actions/song_actions';
import PlayBarDetail from './playbar_detail';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: null };
  }

  componentDidMount() {
    const { activeSong, fetchSong } = this.props;
    fetchSong(52).then(() => {
      const audio = new Audio(activeSong.songUrl);
      this.setState({ song: audio });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { playing, activeSong } = this.props;
    if (activeSong.id !== prevProps.activeSong.id) {
      if (prevState.song) {
        prevState.song.pause();
      }
      const audio = new Audio(activeSong.songUrl);
      audio.play();
      this.setState({ song: audio });
    } else {
      if (this.state.song) {
        if (playing !== prevProps.playing || activeSong.id !== prevProps.activeSong.id) {
          if (playing) {
            this.state.song.play();
          } else {
            this.state.song.pause();
          }
        }
      }
    }
  }

  render() {
    const { song } = this.state;
    const { pause } = this.props;
    if (!song) return null;
    song.onended = e => {
      pause();
    };
    return (
      <div className="playbar-container">
        <PlayBarDetail song={this.state.song} playing={this.props.playing} />
      </div>
    );
  }
}

const mstp = state => {
  return {
    activeSong: state.ui.activeSong.song || {},
    playing: state.ui.activeSong.playing
  };
};

const mdtp = dispatch => ({
  pause: () => dispatch(pause()),
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mstp,
  mdtp
)(Playbar);
