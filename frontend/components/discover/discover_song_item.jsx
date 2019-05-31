import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../songs/play_button';

export default ({ song }) => {
  if (!song) return null;
  const { photoUrl, username } = song;
  let photo = photoUrl ? photoUrl : null;
  return (
    <div className="discover-song-item-container">
      <div className="discover-song-item-artwork">
        <img src={photoUrl} alt="" />
        <div className="hidden">
          <PlayButton song={song} />
        </div>
      </div>
      <div className="discover-song-item-info">
        <Link to={`/${song.user_id}/${song.id}`} className="discover-song-title">
          {song.title}
        </Link>
        <Link to={`/users/${song.user_id}`}>{username}</Link>
      </div>
    </div>
  );
};
