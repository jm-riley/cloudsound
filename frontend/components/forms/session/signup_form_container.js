import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../../actions/user_actions';

const mstp = (state, ownProps) => ({
  errors: state.ui.errors.user,
  formType: 'signup'
});

const mdtp = (dispatch, ownProps) => ({
  action: user => dispatch(signup(user))
});

export default connect(
  mstp,
  mdtp
)(SessionForm);
