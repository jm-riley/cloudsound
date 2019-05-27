import React from 'react';
import { connect } from 'react-redux';
import { setActiveSongFile, setActiveSong } from '../../actions/song_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, song: new Audio(this.props.song.songUrl) };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const { playing } = this.state;
    const { setSongFile, setSong, activeSongFile, activeSong, song } = this.props;
    if (activeSongFile) activeSongFile.pause();
    if (song !== activeSong) {
      setSong(song);
    }
    setSongFile(this.state.song).then(() => {
      this.setState({ playing: !playing }, () => {
        if (playing) {
          this.props.activeSongFile.pause();
        } else {
          this.props.activeSongFile.play();
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { activeSong, song } = this.props;
    if (prevProps === this.props) return;
    if (activeSong && song.id !== activeSong.id) {
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

const mstp = state => ({
  activeSongFile: state.ui.activeSong.songFile,
  activeSong: state.ui.activeSong.song
});

const mdtp = dispatch => ({
  setSongFile: song => dispatch(setActiveSongFile(song)),
  setSong: song => dispatch(setActiveSong(song))
});

export default connect(
  mstp,
  mdtp
)(PlayButton);
