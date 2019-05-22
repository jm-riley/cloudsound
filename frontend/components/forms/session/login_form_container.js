import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../../actions/user_actions';
import { closeModal } from '../../../actions/modal_actions';

const mstp = (state, ownProps) => ({
  errors: state.ui.errors.user,
  formType: 'login'
});

const mdtp = (dispatch, ownProps) => ({
  action: user => dispatch(login(user)),
  demoLogin: () => dispatch(login({ username: 'jmwr', password: 'password' })),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mstp,
  mdtp
)(SessionForm);
