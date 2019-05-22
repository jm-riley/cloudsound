import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../../actions/user_actions';
import { closeModal } from '../../../actions/modal_actions';

const mstp = (state, ownProps) => ({
  errors: state.ui.errors.user,
  formType: 'signup'
});

const mdtp = (dispatch, ownProps) => ({
  action: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  demoLogin: () => dispatch(login({ username: 'jmwr', password: 'password' }))
});

export default connect(
  mstp,
  mdtp
)(SessionForm);
