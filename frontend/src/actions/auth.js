import { 
  USER_LOADED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./types";
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
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
   
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
    //const errors = err.response.data.errors;
    console.log("login error")

    dispatch({
      type: LOGIN_FAIL
    });
  } 
};


