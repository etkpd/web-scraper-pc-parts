import {
  USER_LOADED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: null,
  errors: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.userDetails
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload
      };
    case USER_LOGOUT:
      return {};
    case LOGIN_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false
        };
    default:
      return state;
  }
}
