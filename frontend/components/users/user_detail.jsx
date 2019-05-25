import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import UserHeader from './user_header';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props;
    if (!this.props.user) return null;
    return (
      <div className="user-detail-main">
        <UserHeader user={user} />
      </div>
    );
  }
}

const mstp = (state, ownProps) => ({
  songs: state.entities.songs,
  user: state.entities.users[ownProps.match.params.userId]
});

const mdtp = dispatch => ({
  fetchSongs: userId => dispatch(fetchSongs(userId))
});

export default connect(
  mstp,
  mdtp
)(UserDetail);
