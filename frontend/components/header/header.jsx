import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => (
  <div className="header">
    <div>
      <h3>CLOUDSOUND</h3>
    </div>
    <div>
      <div>Upload</div>
      {currentUser && currentUser.username}
      <Link to="/">
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  </div>
);
