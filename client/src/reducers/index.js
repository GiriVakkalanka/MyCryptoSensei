import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import applicationReducer from './applicationReducer';
import linksReducer from './linksReducer';
import adminReducer from './adminReducer';
import dateReducer from './dateReducer';
import infoReducer from './infoReducer';
import rateReducer from './rateReducer';
import senseiPageReducer from './senseiPageReducer';
import drawerReducer from './drawerReducer';

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
  links: linksReducer,
  admin: adminReducer,
  date: dateReducer,
  info: infoReducer,
  rate: rateReducer,
  senseiPage: senseiPageReducer,
  drawer: drawerReducer
});
