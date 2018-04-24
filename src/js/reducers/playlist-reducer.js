import { actionTypes } from '../actions/action-types';

export default function playlistReducer(state = [], { type, name, song }) {
  if (actionTypes.ADD_PLAYLIST === type) {
    return [...state, { name, songs: [] }];
  }

  if (type === actionTypes.ADD_SONG_TO_PLAYLIST) {
    const playlistToAddTo = state.find(p => p.name === name);
    const newPlaylist = Object.assign({}, playlistToAddTo, {
      songs: [...playlistToAddTo.songs, song]
    });
    const playlistsNotChanged = state.filter(p => p.name !== name);
    return [...playlistsNotChanged, newPlaylist];
  }

  return state;
}