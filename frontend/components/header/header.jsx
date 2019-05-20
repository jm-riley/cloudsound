import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) =>
  currentUser ? (
    <div>
      {currentUser.username}
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="header">
      <h3>CLOUDSOUND</h3>
      <div>
        <Link to="/login" className="loginButton">
          Sign In
        </Link>
        <Link to="/signup" className="signupButton">
          Create Account
        </Link>
      </div>
    </div>
  );
