import { combineReducers } from 'redux';
import AlertReducer from './alert';
import AuthenticationReducer from './auth';

export default combineReducers({
  auth: AuthenticationReducer,
  alert: AlertReducer
});
