import React from 'react';
import { connect } from 'react-redux';
import { play, pause, fetchSong, setActiveSong } from '../../actions/song_actions';

class PlaybarControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songVolume: 0.75 };
    this.handleNext = this.handleNext.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  handleNext() {
    const { activeSong, setActiveSong, fetchSong } = this.props;
    let randomId = activeSong.id;
    while (randomId === activeSong.id) {
      randomId = Math.floor(Math.random() * 12 + 1) + 50;
    }
    fetchSong(randomId).then(song => {
      setActiveSong(song.song);
    });
  }

  handleVolume(e) {
    this.props.song.volume = e.target.value;
    this.setState({ songVolume: e.target.value });
  }

  render() {
    const { play, pause, playing, song } = this.props;
    let playbackIcon = playing ? <i className="fas fa-pause" /> : <i className="fas fa-play" />;
    let action = playing ? pause : play;
    let volumeIcon;
    if (song.volume > 0.5) {
      volumeIcon = <i className="fas fa-volume-up" />;
    } else if (song.volume > 0) {
      volumeIcon = <i className="fas fa-volume-down" />;
    } else {
      volumeIcon = <i className="fas fa-volume-off" />;
    }
    return (
      <div className="playbar-controls">
        <div className="play-pause" onClick={action}>
          {playbackIcon}
        </div>
        <div className="next" onClick={this.handleNext}>
          <i className="fas fa-step-forward" />
        </div>
        <div className="volume">
          {volumeIcon}
          <div className="range-slider">
            <input
              className="input-range"
              orient="vertical"
              type="range"
              step="0.05"
              value={this.state.songVolume}
              min="0"
              max="1"
              onChange={e => this.handleVolume(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  playing: state.ui.activeSong.playing,
  activeSong: state.ui.activeSong.song
});

const mdtp = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  fetchSong: id => dispatch(fetchSong(id)),
  setActiveSong: song => dispatch(setActiveSong(song))
});

export default connect(
  mstp,
  mdtp
)(PlaybarControls);
