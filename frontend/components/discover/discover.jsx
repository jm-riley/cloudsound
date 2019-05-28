import React from 'react';
import DiscoverGroup from './discover_group';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

class Discover extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    if (!songs.length) return null;
    const newMusic = songs.slice(0, 4);
    const freshTracks = songs.slice(4, 8);
    const staffPicks = songs.slice(8);
    return (
      <div className="discover-container">
        <div className="discover-left">
          <DiscoverGroup
            header="New Music Now"
            description="The latest hits, updated all the time"
            songs={newMusic}
          />
          <DiscoverGroup
            header="Fresh Tracks"
            description="Hear what the CloudSound community is up to"
            songs={freshTracks}
          />
          <DiscoverGroup
            header="Staff Picks"
            description="Enjoy some of our favorites"
            songs={staffPicks}
          />
        </div>
        <div className="discover-right" />
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
)(Discover);
