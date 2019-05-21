import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';

const Modal = ({ type, closeModal }) => {
  if (!type) return null;
  const form = type === 'signup' ? <SignupForm /> : <LoginForm />;
  return (
    <div className="modal-container">
      <button onClick={closeModal}>X</button>
      <div className="modal-content">{form}</div>
    </div>
  );
};

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
