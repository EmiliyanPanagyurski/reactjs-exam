import songs from '../src/js/data/songs';
import { actionTypes } from '../src/js/actions/action-types';
import playlistReducer from '../src/js//reducers/playlist-reducer';
import searchReducer from '../src/js//reducers/searchResult-reducer';
import songsReducer from '../src/js//reducers/songs-reducer';

describe('Reducers tests:', () => {
  test('songsReducer should return songs', () => {
    const returnedSongs = songsReducer();

    expect(returnedSongs).toEqual(songs);
  });

  test('searchReducer should add a searchResult object', () => {
    const action = {
      type: actionTypes.ADD_SEARCH_RESULT,
      querry: 'lose',
      result: []
    };

    const searchResult = {
      querry: 'lose',
      result: []
    };

    const returnedSearchResult = searchReducer(undefined, action);

    expect(returnedSearchResult).toEqual(searchResult);
  });

  test('searchReducer should return default', () => {
    const returnedSearchResult = searchReducer(undefined, { type: 'no-type' });

    expect(returnedSearchResult).toEqual({});
  });

  test('playlistReducer should add a playlists object', () => {
    const action = {
      type: actionTypes.ADD_PLAYLIST,
      name: 'lose',
    };

    const playlists = [{
      name: 'lose',
      songs: []
    }];

    const returnedPlaylists = playlistReducer(undefined, action);

    expect(returnedPlaylists).toEqual(playlists);
  });

  test('playlistReducer should add a song to playlist in playlists', () => {
    const action = {
      type: actionTypes.ADD_SONG_TO_PLAYLIST,
      name: 'lose',
      song: {
        name: 'lose yourself'
      }
    };

    const playlist = [{
      name: 'lose',
      songs: []
    }];

    const resultPlaylists = [{
      name: 'lose',
      songs: [{ name: 'lose yourself' }]
    }];

    const returnedPlaylists = playlistReducer(playlist, action);

    expect(returnedPlaylists).toEqual(resultPlaylists);
  });

  test('playlistReducer should return default', () => {
    const returnedPlaylists = playlistReducer(undefined, { type: 'no-type' });

    expect(returnedPlaylists).toEqual([]);
  });
});