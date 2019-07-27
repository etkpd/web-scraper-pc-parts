import { combineReducers } from 'redux';
import AlertReducer from './alert';
import AuthenticationReducer from './auth';
import DataReducer from './data';

export default combineReducers({
  auth: AuthenticationReducer,
  alert: AlertReducer,
  data: DataReducer
});
