import { connect } from 'react-redux';
import SongUpdateForm from './song_update_form';
import { updateSong } from '../../actions/song_actions';
import { closeModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => {
  return {
    currentUser: state.session.id
  };
};

const mdtp = dispatch => ({
  update: song => dispatch(updateSong(song)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mstp,
  mdtp
)(SongUpdateForm);
