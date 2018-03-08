import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';
import linksReducer from './linksReducer';

// const persistConfig = {
//   key: 'root',
//   storage
// }
//
// const persistedReducer = persistReducer(persistConfig, reducers);

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  application: applicationReducer,
  links: linksReducer
});
