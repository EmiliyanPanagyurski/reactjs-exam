import { addSearchReasultActionCreator, addPlaylistCreator, addSontToPlaylist } from '../src/js//actions/action-creators';
import { actionTypes } from '../src/js//actions/action-types';

describe('action creators tests:', () => {
  it('addSearchReasultActionCreator should return action object', () => {
    const action = {
      type: actionTypes.ADD_SEARCH_RESULT,
      querry: 'lose',
      result: []
    };

    expect(addSearchReasultActionCreator('lose', [])).toEqual(action);
  });

  it('addPlaylistCreator should return action object', () => {
    const action = {
      type: actionTypes.ADD_PLAYLIST,
      name: 'playlist'
    };

    expect(addPlaylistCreator('playlist')).toEqual(action);
  });

  it('addSontToPlaylist should return action object', () => {
    const action = {
      type: actionTypes.ADD_SONG_TO_PLAYLIST,
      name: 'playlist',
      song: {}
    };

    expect(addSontToPlaylist('playlist', {})).toEqual(action);
  });
});