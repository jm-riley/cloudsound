import React from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import { Link } from 'react-router-dom';
import PlayButton from '../songs/play_button';

class DiscoverSongItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.songId);
  }

  render() {
    const { song, users } = this.props;
    if (!song) return null;
    const { photoUrl } = this.props.song;
    const username = users[this.props.song.user_id].username;
    return (
      <div className="discover-song-item-container">
        <div className="discover-song-item-artwork">
          <img src={photoUrl} alt="" />
          <div className="hidden">
            <PlayButton song={song} />
          </div>
        </div>
        <Link to={`/${song.user_id}/${song.id}`}>{song.title}</Link>
        <br />
        <Link to={`/users/${song.user_id}`}>{username}</Link>
      </div>
    );
  }
}

const mstp = (state, ownProps) => ({
  song: state.entities.songs[ownProps.songId],
  users: state.entities.users
});

const mdtp = dispatch => ({
  fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(
  mstp,
  mdtp
)(DiscoverSongItem);
