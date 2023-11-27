import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../redux/reducers/counter/index.js';
import userReducer from '../redux/reducers/user/index.js';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
