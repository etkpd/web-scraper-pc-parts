import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false
        };
    default:
      return state;
  }
}
