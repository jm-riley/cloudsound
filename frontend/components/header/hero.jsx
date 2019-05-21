import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import Modal from '../forms/modal';

const Hero = ({ openModal }) => {
  return (
    <div className="hero">
      <div className="hero-header">
        <div className="hero-logo">
          <i className="fab fa-mixcloud" />
          <h3>CLOUDSOUND</h3>
        </div>
        <div className="hero-buttons">
          <button className="loginButton" onClick={() => openModal('login')}>
            Sign in
          </button>
          <button className="signupButton" onClick={() => openModal('signup')}>
            Create account
          </button>
          {/* <Link to="/signup" className="signupButton">
            Create Account
          </Link> */}
        </div>
      </div>
      <div className="hero-text">
        <h2>What's next in music is first on CloudSound</h2>
        <p>
          Upload your first track and begin your journey. Cloudsound gives you space to create, find
          your fans, and connect with other artists.
        </p>
        <button className="signupButton" onClick={() => openModal('signup')}>
          Start uploading today
        </button>
      </div>
      <Modal />
    </div>
  );
};

const mdtp = dispatch => ({
  openModal: type => dispatch(openModal(type))
});

export default connect(
  null,
  mdtp
)(Hero);
