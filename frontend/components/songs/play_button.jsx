import React from 'react';
import { connect } from 'react-redux';
import { setActiveSong } from '../../actions/song_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, song: this.props.song };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const { playing } = this.state;
    const { song, setSong, activeSong } = this.props;
    // playing ? audio.pause() : audio.play();
    setSong(song);

    this.setState({ playing: !playing }, () => {
      if (playing) {
        activeSong.pause();
      } else {
        song.play();
      }
    });
  }

  componentDidUpdate() {}

  render() {
    const { playing } = this.state;
    let playbackIcon = playing ? (
      <i className="fas fa-pause-circle" />
    ) : (
      <i className="fas fa-play-circle" />
    );

    this.state.song.onended = e => {
      this.setState({ playing: false });
    };

    return (
      <div className="play-button" onClick={this.togglePlay}>
        {playbackIcon}
      </div>
    );
  }
}

const mstp = state => {
  return {
    activeSong: state.ui.activeSong
  };
};

const mdtp = dispatch => ({
  setSong: song => dispatch(setActiveSong(song))
});

export default connect(
  mstp,
  mdtp
)(PlayButton);
