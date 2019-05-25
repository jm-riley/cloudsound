import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const REMOVE_SONG_ERRORS = 'REMOVE_SONG_ERRORS';

const receiveSong = payload => ({
  type: RECEIVE_SONG,
  song: payload.song,
  user: payload.user
});

const receiveSongs = payload => ({
  type: RECEIVE_SONGS,
  songs: payload.songs,
  user: payload.user
});

const removeSong = id => ({
  type: REMOVE_SONG,
  id
});

const receiveSongErrors = errs => {
  return {
    type: RECEIVE_SONG_ERRORS,
    errs: errs.responseJSON
  };
};

export const clearSongErrors = () => ({
  type: REMOVE_SONG_ERRORS
});

export const uploadSong = song => dispatch => {
  debugger;
  return SongApiUtil.uploadSong(song).then(
    song => {
      dispatch(receiveSong(song));
      return song;
    },
    errs => {
      debugger;
      dispatch(receiveSongErrors(errs));
    }
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

export const fetchSongs = userId => dispatch => {
  return SongApiUtil.fetchSongs(userId).then(
    songs => dispatch(receiveSongs(songs)),
    errs => dispatch(receiveSongErrors(errs))
  );
};

export const deleteSong = id => dispatch => {
  return SongApiUtil.deleteSong(id).then(
    () => dispatch(removeSong(id)),
    errs => dispatch(receiveSongErrors(errs))
  );
};
