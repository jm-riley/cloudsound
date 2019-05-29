import React from 'react';
import { connect } from 'react-redux';
import { setActiveSongFile } from '../../actions/song_actions';
import PlayBarDetail from './playbar_detail';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: null };
  }

  componentDidMount() {
    const { activeSong } = this.props;
    const audio = new Audio(activeSong.songUrl);
    this.setState({ song: audio });
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
    return (
      <div className="playbar-container">
        <PlayBarDetail />
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

export default connect(mstp)(Playbar);
