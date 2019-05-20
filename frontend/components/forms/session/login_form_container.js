import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../../actions/user_actions';

const mstp = (state, ownProps) => ({
  errors: state.ui.errors.user,
  formType: 'login'
});

const mdtp = (dispatch, ownProps) => ({
  action: user => dispatch(login(user))
});

export default connect(
  mstp,
  mdtp
)(SessionForm);
