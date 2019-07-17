import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
      return [...state, payload];
    case REMOVE_DATA:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
