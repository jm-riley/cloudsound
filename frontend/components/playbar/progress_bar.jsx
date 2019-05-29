import React from 'react';
// import {connect} from 'react-redux';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: { width: 0 } };
    this.changeTime = this.changeTime.bind(this);
  }

  componentDidMount() {
    this.setState({ song: this.props.song });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing !== this.props.playing) {
      if (!this.props.playing) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(() => this.changeTime(), 1000);
      }
    }
    if (prevProps.song !== this.props.song) {
      this.setState({ song: this.props.song });
    }
  }

  changeTime() {
    const { song } = this.state;
    let progress = (Math.floor(song.currentTime) / Math.floor(song.duration)) * 100;
    let progressWidth;
    if (progress) {
      progressWidth = {
        width: `${progress}%`
      };
    } else progressWidth = { width: 0 };
    this.setState({ progress: progressWidth });
    console.log('time');
  }

  getTime(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    if (seconds < 10) {
      return `${minutes}:0${seconds.toString()}`;
    } else {
      if (!seconds) return '0:00';
      return `${minutes}:${seconds.toString()}`;
    }
  }

  handleSeek(e) {
    this.props.song.currentTime = e.target.value;
  }

  render() {
    const { song } = this.state;
    const { playing } = this.props;
    // debugger;
    // if (playing) {
    //   setInterval(this.changeTime, 1000);
    // } else clearInterval();

    if (!song) return null;
    let elapsedTime = Math.floor(song.currentTime);
    let duration = Math.floor(song.duration);
    let remainingTime = duration - elapsedTime;
    let elapsedTimeDisplay = this.getTime(elapsedTime);
    let remainingTimeDisplay = this.getTime(remainingTime);

    // debugger;
    return (
      <div className="progress-bar-container">
        <div className="elapsed-time">{elapsedTimeDisplay}</div>
        <div className="progress-container">
          <div className="progress" style={this.state.progress} />
          <div className="slider">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={elapsedTime}
              onChange={this.handleSeek.bind(this)}
            />
          </div>
        </div>
        <div className="remaining-time">{remainingTimeDisplay}</div>
      </div>
    );
  }
}

export default ProgressBar;
// const mstp = state => ({
//   song: state.ui.
// })
