import React from 'react';
import PlaybarSongDetail from './playbar_song_detail';
import PlaybarControls from './playbar_controls';

const PlaybarDetail = () => {
  return (
    <div className="playbar-inner">
      <PlaybarControls />
      <PlaybarSongDetail />
    </div>
  );
};

export default PlaybarDetail;
