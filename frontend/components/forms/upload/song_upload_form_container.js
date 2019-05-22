import { connect } from 'react-redux';
import SongUploadForm from './song_upload_form';
import { uploadSong } from '../../../actions/song_actions';

const mdtp = dispatch => ({
  uploadSong: song => dispatch(uploadSong(song))
});

export default connect(
  null,
  mdtp
)(SongUploadForm);
