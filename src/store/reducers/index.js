import { combineReducers } from 'redux';
import app from './app';
import events from './events';

export default combineReducers({
  app,
  events,
});
