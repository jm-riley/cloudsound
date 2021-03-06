import React from 'react';
import { connect } from 'react-redux';
import { fetchUserSongs } from '../../actions/song_actions';
import UserHeader from './user_header';
import UserSongs from './user_songs';
import Sidebar from '../sidebar/sidebar';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUserSongs(this.props.match.params.userId);
    }
  }

  componentDidMount() {
    this.props.fetchUserSongs(this.props.match.params.userId);
  }

  render() {
    const { user, songs } = this.props;
    if (!this.props.user) return null;
    return (
      <div className="user-detail-main">
        <UserHeader user={user} />
        <div className="user-detail-content">
          <div className="user-detail-left">
            <UserSongs songs={songs} username={user.username} />
          </div>
          <div className="user-detail-right">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

const mstp = (state, ownProps) => ({
  songs: Object.values(state.entities.songs),
  user: state.entities.users[ownProps.match.params.userId]
});

const mdtp = dispatch => ({
  fetchUserSongs: userId => dispatch(fetchUserSongs(userId))
});

export default connect(
  mstp,
  mdtp
)(UserDetail);
