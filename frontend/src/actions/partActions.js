import { 
  SET_LOADING,
  CREATE_PART,
  DELETE_PART
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
    dispatch({
      type: CREATE_PART,
      payload: res.data  
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  } 
}; 

export const deletePart = (partID) => async dispatch => {
  try {
    await api.part.delete_part(partID);
    dispatch({
      type: DELETE_PART,
      payload: partID 
    });

  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  } 
}; 

