import React from 'react';
import PlayButton from './play_button';
import { Link, withRouter } from 'react-router-dom';

class SongItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { song: new Audio(this.props.song.songUrl) };
  }

  render() {
    const { song, username } = this.props;
    return (
      <div className="song-item-container">
        <div className="song-item-artwork">
          <img src={song.photoUrl} />
        </div>
        <div className="song-content">
          <div className="song-item-header">
            <div className="song-item-play">
              <PlayButton song={song} />
            </div>
            <div className="song-item-info">
              <span className="song-item-artist">{username}</span>
              <br />
              <span className="song-item-title">
                <Link to={`/${this.props.match.params.userId}/${song.id}`}>{song.title}</Link>
              </span>
            </div>
          </div>
          <div className="song-waveform" />
        </div>
      </div>
    );
  }
}

export default withRouter(SongItem);
