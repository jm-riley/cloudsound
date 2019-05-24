import { connect } from 'react-redux';
import SongUpdateForm from './song_update_form';
import { updateSong } from '../../actions/song_actions';

const mstp = (state, ownProps) => {
  return {
    currentUser: state.session.id
  };
};

const mdtp = dispatch => ({
  update: song => dispatch(updateSong(song))
});

export default connect(
  mstp,
  mdtp
)(SongUpdateForm);
