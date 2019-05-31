import React from 'react';
import { connect } from 'react-redux';
import { setActiveSongFile, setActiveSong, play, pause } from '../../actions/song_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, song: null };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const { setSong, activeSong, song, play, pause } = this.props;
    const { playing } = this.state;
    if (!activeSong || song.id !== activeSong.id) {
      setSong(song);
    }
    this.setState({ playing: !playing });
    if (playing) {
      pause();
    } else play();
  }

  componentDidUpdate(prevProps, prevState) {
    const { activeSong, song } = this.props;
    if (!activeSong) return;
    if (
      this.props.activeSong.id !== prevProps.activeSong.id &&
      this.props.song.id !== this.props.activeSong.id
    ) {
      this.setState({ playing: false });
    }
  }

  render() {
    const { playing } = this.state;
    let playbackIcon = playing ? (
      <i className="fas fa-pause-circle" />
    ) : (
      <i className="fas fa-play-circle" />
    );

    return (
      <div className="play-button" onClick={this.togglePlay}>
        {playbackIcon}
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
  setSong: song => dispatch(setActiveSong(song)),
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
});

export default connect(
  mstp,
  mdtp
)(PlayButton);
