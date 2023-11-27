// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk);
  },
});

export default store;
