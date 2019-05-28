import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../songs/play_button';

export default ({ song }) => {
  if (!song) return null;
  const { photoUrl, username } = song;
  return (
    <div className="discover-song-item-container">
      <div className="discover-song-item-artwork">
        <img src={photoUrl} alt="" />
        <div className="hidden">
          <PlayButton song={song} />
        </div>
      </div>
      <Link to={`/${song.user_id}/${song.id}`}>{song.title}</Link>
      <br />
      <Link to={`/users/${song.user_id}`}>{username}</Link>
    </div>
  );
};
