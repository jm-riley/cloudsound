import React from 'react';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, song: this.props.song };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const { playing, song } = this.state;
    // playing ? audio.pause() : audio.play();
    this.setState({ playing: !playing }, () => {
      // playing ? audio.pause() : audio.play();
      if (playing) {
        song.pause();
      } else song.play();
    });
  }

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

export default PlayButton;
