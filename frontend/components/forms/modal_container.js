import Modal from './modal';
import { connect } from 'react-redux';

const mstp = state => ({
  type: state.ui.modal
});

const mdtp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mstp,
  mdtp
)(Modal);
