import React from 'react';
// import {connect} from 'react-redux';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: null };
    // this.changeTime = this.changeTime.bind(this);
  }

  componentDidMount() {
    this.setState({ song: this.props.song });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing !== this.props.playing) {
      this.interval = setInterval(() => this.changeTime(), 1000);
      if (!this.props.playing) {
        debugger;
        clearInterval(this.interval);
      }
    }
    if (prevProps.song !== this.props.song) {
      this.setState({ song: this.props.song });
    }
  }

  changeTime() {
    const { song } = this.state;
    // debugger;
    this.setState({ elapsedTime: song.currentTime });
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
    // } else {
    //   if (seconds < 10) {
    //     return `${minutes}:0${seconds}`
    //   }
    // }
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
    let remainingTime = Math.floor(song.duration) - elapsedTime;
    let elapsedTimeDisplay = this.getTime(elapsedTime);
    let remainingTimeDisplay = this.getTime(remainingTime);
    let progress = Math.floor((elapsedTime / Math.floor(song.duration)) * 100);
    let progressWidth;
    if (progress) {
      progressWidth = {
        width: `${progress}%`
        // 'url(' + imgUrl + ')'
      };
    } else progressWidth = { width: 0 };
    // debugger;
    return (
      <div className="progress-bar-container">
        <div className="elapsed-time">{elapsedTimeDisplay}</div>
        <div className="progress-container">
          <div className="progress" style={progressWidth} />
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
