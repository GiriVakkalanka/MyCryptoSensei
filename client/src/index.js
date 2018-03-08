import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
//import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import reducers from './reducers';

//dev only axios helpers
import axios from 'axios';
window.axios = axios;

// const persistConfig = {
//   key: 'root',
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, reducers);
// let persistor = persistStore(store);
//
const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(reduxThunk)
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
