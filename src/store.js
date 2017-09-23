/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import hello from './reducer';

const mainReducer = combineReducers({ hello });

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
