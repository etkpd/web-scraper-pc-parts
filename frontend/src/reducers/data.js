import { ADD_DATA, REMOVE_DATA } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
      return [...state, ...payload.partsDetails];
    case REMOVE_DATA:
    default:
      return state;
  }
}
