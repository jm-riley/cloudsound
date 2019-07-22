import React from 'react';
import PlaybarSongDetail from './playbar_song_detail';
import PlaybarControls from './playbar_controls';
import ProgressBar from './progress_bar';

const PlaybarDetail = ({ song, playing }) => {
  return (
    <div className="playbar-inner">
      <PlaybarControls song={song} />
      <ProgressBar song={song} playing={playing} />
      <PlaybarSongDetail />
    </div>
  );
};

export default PlaybarDetail;
