import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { closing: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // debugger;
    if (e.target.classList[0] === 'modal-container' || e.target.classList[0] === 'far') {
      e.stopPropagation();
      this.setState({ closing: true });
      setTimeout(() => {
        this.props.closeModal();
        this.setState({ closing: false });
      }, 300);
    }
  }

  render() {
    const { type } = this.props;
    let fadeout;
    let slideup;

    if (!type) return null;

    if (this.state.closing) {
      fadeout = 'fadeout';
      slideup = 'slideup';
    }

    const form = type === 'signup' ? <SignupForm /> : <LoginForm />;
    return (
      <div className={`modal-container ${fadeout}`} onClick={this.handleClick}>
        <button onClick={this.handleClick} className={`modal-close ${fadeout}`}>
          <i className="far fa-times-circle" />
        </button>
        <div className={`modal-content ${slideup}`}>{form}</div>
      </div>
    );
  }
}

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
