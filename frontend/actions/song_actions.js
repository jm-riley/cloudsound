import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const REMOVE_SONG_ERRORS = 'REMOVE_SONG_ERRORS';

const receiveSong = payload => ({
  type: RECEIVE_SONG,
  song: payload.song,
  user: payload.user
});

const removeSong = id => ({
  type: REMOVE_SONG,
  id
});

const receiveSongErrors = errs => ({
  type: RECEIVE_SONG_ERRORS,
  errs: errs.responseJSON
});

export const clearSongErrors = () => ({
  type: REMOVE_SONG_ERRORS
});

export const uploadSong = song => dispatch => {
  return SongApiUtil.uploadSong(song).then(
    song => {
      dispatch(receiveSong(song));
      return song;
    },
    errs => dispatch(receiveSongErrors(errs))
  );
};

export const updateSong = song => dispatch => {
  return SongApiUtil.updateSong(song).then(
    song => {
      dispatch(receiveSong(song));
      return song;
    },
    errs => dispatch(receiveSongErrors(errs))
  );
};

export const fetchSong = id => dispatch => {
  return SongApiUtil.fetchSong(id).then(
    song => dispatch(receiveSong(song)),
    errs => dispatch(receiveSongErrors(errs))
  );
};

export const deleteSong = id => dispatch => {
  return SongApiUtil.deleteSong(id).then(
    () => dispatch(removeSong(id)),
    errs => dispatch(receiveSongErrors(errs))
  );
};
