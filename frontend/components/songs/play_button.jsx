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
    // const { playing } = this.state;
    // const { setSongFile, setSong, activeSongFile, activeSong, song } = this.props;
    // if (activeSongFile) activeSongFile.pause();
    // if (!activeSong || song.id !== activeSong.id) {
    //   setSong(song);
    //   setSongFile(new Audio(song.songUrl));
    // }
    // // debugger;
    // // setSongFile(this.state.song).then(() => {
    // // setTimeout(() => {
    // // if (playing) {
    // //   this.props.activeSongFile.pause();
    // // } else {
    // //   // debugger;
    // //   this.props.activeSongFile.play();
    // // }
    // setTimeout(() => {
    //   this.setState({ playing: !playing }, () => {
    //     if (playing) {
    //       this.props.activeSongFile.pause();
    //     } else {
    //       this.props.activeSongFile.play();
    //     }
    //   });
    // }, 300);
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
    // debugger;
    const { activeSong, song } = this.props;
    if (!activeSong) return;
    // debugger;
    if (
      this.props.activeSong.id !== prevProps.activeSong.id &&
      this.props.song.id !== this.props.activeSong.id
    ) {
      this.setState({ playing: false });
    }
  }

  render() {
    const { playing } = this.state;
    const { activeSong, song, activeSongFile } = this.props;
    let playbackIcon = playing ? (
      <i className="fas fa-pause-circle" />
    ) : (
      <i className="fas fa-play-circle" />
    );
    // if (activeSong && song.id !== activeSong.id) {
    //   playbackIcon = <i className="fas fa-play-circle" />;
    //   // this.setState({ playing: false });
    // }
    if (activeSongFile) {
      activeSongFile.onended = e => {
        this.setState({ playing: false });
      };
    }

    return (
      <div className="play-button" onClick={this.togglePlay}>
        {playbackIcon}
      </div>
    );
  }
}

const mstp = state => {
  return {
    activeSongFile: state.ui.activeSong.songFile,
    activeSong: state.ui.activeSong.song || {}
  };
};

const mdtp = dispatch => ({
  setSongFile: song => dispatch(setActiveSongFile(song)),
  setSong: song => dispatch(setActiveSong(song)),
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
});

export default connect(
  mstp,
  mdtp
)(PlayButton);
