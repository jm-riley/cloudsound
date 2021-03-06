import React from 'react';
import DiscoverSongItem from './discover_song_item';

export default ({ header, description, songs }) => {
  return (
    <div className="discover-group-container">
      <div className="discover-header">
        <h3>{header}</h3>
        <p>{description}</p>
        <div className="discover-songs-container">
          {songs.map((song, i) => (
            <DiscoverSongItem song={song} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
