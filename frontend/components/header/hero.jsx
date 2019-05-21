import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
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
      <div className="hero-text">
        <h2>What's next in music is first on CloudSound</h2>
        <p>
          Upload your first track and begin your journey. Cloudsound gives you space to create, find
          your fans, and connect with other artists.
        </p>
        <Link to="/signup" className="signupButton">
          Start uploading today
        </Link>
      </div>
    </div>
  );
};

export default Hero;
