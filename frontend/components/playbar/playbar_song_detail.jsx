import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PlaybarSongDetail = ({ song }) => {
  let artwork, info;
  if (song) {
    artwork = song.photoUrl ? song.photoUrl : window.songPlaceholderPhoto;
    info = (
      <div className="playbar-song-info">
        <div className="playbar-song-artist">
          <Link to={`/users/${song.user_id}`}>{song.username}</Link>
        </div>
        <div className="playbar-song-title">
          <Link to={`/${song.user_id}/${song.id}`}>{song.title}</Link>
        </div>
      </div>
    );
  } else {
    artwork = window.songPlaceholderPhoto;
  }

  return (
    <div className="playbar-song-detail">
      <div className="playbar-song-artwork">
        <img src={artwork} alt="" />
      </div>
      {info}
    </div>
  );
};

const mstp = state => ({
  song: state.ui.activeSong.song
});

export default connect(mstp)(PlaybarSongDetail);
