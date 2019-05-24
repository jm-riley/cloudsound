import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

const receiveSong = payload => ({
  type: RECEIVE_SONG,
  song: payload.song,
  user: payload.user
});

const removeSong = id => ({
  type: REMOVE_SONG,
  id
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

export const deleteSong = id => dispatch => {
  return SongApiUtil.deleteSong(id).then(() => dispatch(removeSong(id)));
};
