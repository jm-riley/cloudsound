import { connect } from 'react-redux';
import SongUploadForm from './song_upload_form';
import { uploadSong } from '../../../actions/song_actions';
import { clearSongErrors } from '../../../actions/song_actions';

const mstp = state => ({
  currentUser: state.session.id,
  errors: state.ui.errors.song
});

const mdtp = dispatch => ({
  upload: song => dispatch(uploadSong(song)),
  clearErrors: () => dispatch(clearSongErrors())
});

export default connect(
  mstp,
  mdtp
)(SongUploadForm);
