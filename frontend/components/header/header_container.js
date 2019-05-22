import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

import Header from './header';

const mstp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: type => dispatch(openModal(type))
});

export default connect(
  mstp,
  mdtp
)(Header);
