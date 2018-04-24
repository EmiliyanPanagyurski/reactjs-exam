import { actionTypes } from './action-types';

export const addSearchReasultActionCreator = (querry, result) => ({
  type: actionTypes.ADD_SEARCH_RESULT,
  querry,
  result
});

export const addPlaylistCreator = name => ({
  type: actionTypes.ADD_PLAYLIST,
  name
});

export const addSontToPlaylist = (name, song) => ({
  type: actionTypes.ADD_SONG_TO_PLAYLIST,
  name,
  song
});