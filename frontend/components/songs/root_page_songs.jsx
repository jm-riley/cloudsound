import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import DiscoverSongItem from '../discover/discover_song_item';

class RootPageSongs extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    if (!songs) return null;
    return (
      <div className="root-songs-container">
        {songs.map((song, i) => (
          <DiscoverSongItem song={song} key={i} />
        ))}
      </div>
    );
  }
}

const mstp = state => ({
  songs: Object.values(state.entities.songs)
});

const mdtp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mstp,
  mdtp
)(RootPageSongs);
