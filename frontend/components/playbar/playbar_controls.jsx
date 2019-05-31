import React from 'react';
import { connect } from 'react-redux';
import { play, pause, fetchSong, setActiveSong } from '../../actions/song_actions';

const PlaybarControls = ({ playing, play, pause, fetchSong, setActiveSong, activeSong }) => {
  let playbackIcon = playing ? <i className="fas fa-pause" /> : <i className="fas fa-play" />;
  let action = playing ? pause : play;

  const handleNext = () => {
    let randomId = activeSong.id;
    while (randomId === activeSong.id) {
      randomId = Math.floor(Math.random() * 12 + 1) + 50;
    }
    fetchSong(randomId).then(song => {
      setActiveSong(song.song);
    });
  };
  return (
    <div className="playbar-controls">
      <div className="play-pause" onClick={action}>
        {playbackIcon}
      </div>
      <div className="next" onClick={handleNext}>
        <i className="fas fa-step-forward" />
      </div>
    </div>
  );
};

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
