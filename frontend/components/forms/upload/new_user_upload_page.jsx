import React from 'react';

export default ({ openModal }) => {
  return (
    <div className="new-user-upload-container">
      <div className="new-user-upload-hero">
        <h1>First upload to first album</h1>
        <p>
          Share your tracks and access the tools you need to break through and build your legacy.
        </p>
        <button className="signupButton" onClick={() => openModal('signup')}>
          Upload your first track
        </button>
      </div>
      <div className="new-user-upload-info">
        <div className="upload-info-first">
          <h2>Real-time state</h2>
          <p>
            See which fans are listening to your tracks the most and where your top fans are, all in
            real-time.
          </p>
        </div>
        <div className="upload-info-second">
          <h2>Find your community</h2>
          <p>
            Share your work with millions of daily active listeners or share a private link with a
            few very special people.
          </p>
        </div>
        <div className="upload-info-third">
          <h2>Connect directly with fans</h2>
          <p>
            With direct messaging and in-track comments, you can always be in touch with your fans,
            whether they are on your block or on the other side of the world.
          </p>
        </div>
      </div>
    </div>
  );
};
