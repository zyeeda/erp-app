/**
 * Created by vimniky on 5/5/16.
 */

import rootReducer from '../reducers'
import { createStore, applyMiddleware, combineReducers } from 'redux';

function configureStore() {
  return createStore(rootReducer);
}

export default configureStore

