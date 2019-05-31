import { connect } from 'react-redux';
import SongUpdateForm from './song_update_form';
import { updateSong, clearSongErrors } from '../../actions/song_actions';
import { closeModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => ({
  currentUser: state.session.id,
  errors: state.ui.errors.song
});

const mdtp = dispatch => ({
  update: song => dispatch(updateSong(song)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearSongErrors())
});

export default connect(
  mstp,
  mdtp
)(SongUpdateForm);
