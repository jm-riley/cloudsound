import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) =>
  currentUser ? (
    <div>
      {currentUser.username}
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
