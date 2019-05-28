import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_USER_SONGS = 'RECEIVE_USER_SONGS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const REMOVE_SONG_ERRORS = 'REMOVE_SONG_ERRORS';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const SET_ACTIVE_SONG_FILE = 'SET_ACTIVE_SONG_FILE';
export const SET_ACTIVE_SONG = 'SET_ACTIVE_SONG';

export const play = () => ({
  type: PLAY
});

export const pause = () => ({
  type: PAUSE
});

const receiveSong = payload => ({
  type: RECEIVE_SONG,
  song: payload.song,
  user: payload.user
});

const receiveUserSongs = payload => ({
  type: RECEIVE_USER_SONGS,
  songs: payload.songs,
  user: payload.user
});

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
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
  return SongApiUtil.uploadSong(song).then(
    song => {
      dispatch(receiveSong(song));
      return song;
    },
    errs => {
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

export const fetchUserSongs = userId => dispatch => {
  return SongApiUtil.fetchUserSongs(userId).then(
    songs => dispatch(receiveUserSongs(songs)),
    errs => dispatch(receiveSongErrors(errs))
  );
};

export const fetchSongs = () => dispatch => {
  return SongApiUtil.fetchSongs().then(
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

export const setActiveSongFile = song => dispatch => {
  dispatch({
    type: SET_ACTIVE_SONG_FILE,
    song
  });
  return Promise.resolve();
};

export const setActiveSong = song => dispatch => {
  dispatch({
    type: SET_ACTIVE_SONG,
    song
  });
};
