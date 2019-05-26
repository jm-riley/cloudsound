import React from 'react';
import SongItem from '../songs/song_item';

export default ({ songs, username }) => {
  return songs.map(song => {
    return (
      <div key={song.id}>
        <SongItem song={song} username={username} />
      </div>
    );
  });
};
