import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveSong = payload => ({
  type: RECEIVE_SONG,
  song: payload.song,
  user: payload.user
});

export const uploadSong = song => dispatch => {
  return SongApiUtil.uploadSong(song).then(song => {
    dispatch(receiveSong(song));
    return song;
  });
};

export const updateSong = song => dispatch => {
  return SongApiUtil.updateSong(song).then(song => {
    dispatch(receiveSong(song));
    return song;
  });
};

export const fetchSong = id => dispatch => {
  return SongApiUtil.fetchSong(id).then(song => dispatch(receiveSong(song)));
};
