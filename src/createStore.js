/**
 * Created by vimniky on 5/5/16.
 */

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import { template  } from './modules'
// import { tab  } from './modules'

const logger = createLogger();
const middleware = applyMiddleware(thunk , promise, logger);

export default (data = {}) => {
  const rootReducer = combineReducers({
    [template.NAME]: template.reducer
  });
  return createStore(rootReducer, data, middleware);
}

