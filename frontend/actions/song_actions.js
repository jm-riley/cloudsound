import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const uploadSong = song => dispatch => {
  debugger;
  return SongApiUtil.uploadSong(song).then(song => dispatch(receiveSong(song)));
};
