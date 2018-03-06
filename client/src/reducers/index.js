import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  application: applicationReducer
});
