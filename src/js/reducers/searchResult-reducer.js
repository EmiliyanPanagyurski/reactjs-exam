import { actionTypes } from '../actions/action-types';

export default function searchReducer(state = {}, { type, querry, result }) {
  if (type === actionTypes.ADD_SEARCH_RESULT) {
    return Object.assign({}, { querry, result });
  }

  return state;
}