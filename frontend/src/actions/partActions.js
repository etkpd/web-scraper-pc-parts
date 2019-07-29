import { 
  SET_LOADING,
  CREATE_PART,
  LOGIN_FAIL
} from "./types";
import { setAlert } from './alert';
import api from "../api";

// Add Part
export const addPart = (webpage) => async dispatch => {
  try {
  
    dispatch({
      type: SET_LOADING
    });
    
    const res = await api.part.add_part(webpage);
    console.log(res)
    dispatch({
      type: CREATE_PART,
      payload: res.data  
    });
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


