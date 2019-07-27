import { 
  USER_LOADED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  // eslint-disable-next-line
  ADD_DATA
} from "./types";
import { setAlert } from './alert';
import api from "../api";
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await api.user.load_user();

    dispatch({
      type: ADD_DATA,
      payload: res.data
    });  
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

  } catch (err) {
    console.log("")
  }
};

// Login User
export const login = (username, password) => async dispatch => {
 
  
    try {
    dispatch({
      type: LOGIN_LOADING
    });

    const res = await api.user.login({username, password})
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  } 
};


