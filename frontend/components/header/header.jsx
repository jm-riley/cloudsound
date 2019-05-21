import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => (
  <div className="header">
    <h3>CLOUDSOUND</h3>
    <div>
      {currentUser.username}
      <button onClick={logout}>Logout</button>
    </div>
  </div>
);
