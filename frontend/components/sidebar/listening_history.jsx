import React from 'react';
import { connect } from 'react-redux';
import { fetchListeningHistory } from '../../actions/user_actions';
import DiscoverSongItem from '../discover/discover_song_item';

class ListeningHistory extends React.Component {
  // componentDidUpdate(prevProps) {
  //   if (prevProps.listeningHistory !== this.props.listeningHistory) {
  //     this.props.fetchListeningHistory();
  //   }
  // }

  componentDidMount() {
    this.props.fetchListeningHistory();
  }

  render() {
    const { listeningHistory } = this.props;
    if (!listeningHistory) return null;
    let history = listeningHistory.slice(0, 3);
    return (
      <div className="listening-history">
        <div className="history-text">
          <i className="far fa-calendar-alt" />
          Listening History
        </div>
        <div className="history-song-list">
          {history.map((song, i) => {
            return <DiscoverSongItem song={song} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  listeningHistory: state.ui.listeningHistory
});

const mdtp = dispatch => ({
  fetchListeningHistory: () => dispatch(fetchListeningHistory())
});

export default connect(
  mstp,
  mdtp
)(ListeningHistory);
