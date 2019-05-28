import React from 'react';
import { connect } from 'react-redux';
import { setActiveSongFile } from '../../actions/song_actions';
// import { createSelector } from 'redux';

class Playbar extends React.Component {
  componentDidMount() {
    const { activeSong, playing, setSongFile, activeSongFile } = this.props;
    // if (activeSong) {
    //   const audio = new Audio(activeSong.songUrl);
    //   setSongFile(audio);
    // }
    // if (playing) {

    // }
  }

  componentDidUpdate(prevProps) {
    const { playing, activeSongFile, activeSong, setSongFile } = this.props;
    if (prevProps === this.props) return;
    if (activeSong) {
      const audio = new Audio(activeSong.songUrl);
      setSongFile(audio);
    }
    if (!activeSongFile) return;
    if (playing) {
      activeSongFile.play();
    } else {
      activeSongFile.pause();
    }
  }

  render() {
    const { activeSong } = this.props;
    // if (!activeSong) return null;
    return <div>uudfub</div>;
  }
}

const mstp = state => {
  return {
    // activeSongFile: createSelector(state.ui.activeSong.songFile),
    activeSongFile: state.ui.activeSong.songFile,
    activeSong: state.ui.activeSong.song,
    playing: state.ui.activeSong.playing
  };
};

const mdtp = dispatch => ({
  setSongFile: song => dispatch(setActiveSongFile(song)),
  setSong: song => dispatch(setActiveSong(song))
});

export default connect(
  mstp,
  mdtp
)(Playbar);
