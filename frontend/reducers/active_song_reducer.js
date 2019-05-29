import { SET_ACTIVE_SONG_FILE, SET_ACTIVE_SONG, PLAY, PAUSE } from '../actions/song_actions';
import merge from 'lodash/merge';

export default (
  state = {
    playing: false,
    song: {
      description: '',
      id: 52,
      photoUrl:
        '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWHM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ca3ee7f83d24b4c4f4c96bea78ff529972ba3b8a/1.300.jpg',
      songUrl:
        '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBmdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1736dcb18161f1c00da2c4bf3109070236c74d0d/Banana_Cream_-_We_ll_Shine.mp3',
      title: "We'll Shine",
      user_id: 11,
      username: 'Banana Cream'
    }
  },
  action
) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_ACTIVE_SONG_FILE:
      return merge({}, state, { songFile: action.song });
    case SET_ACTIVE_SONG:
      return { song: action.song, playing: true };
    case PLAY:
      return merge({}, state, { playing: true });
    case PAUSE:
      return merge({}, state, { playing: false });
    default:
      return state;
  }
};
