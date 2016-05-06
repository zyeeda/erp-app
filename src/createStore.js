/**
 * Created by vimniky on 5/5/16.
 */

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import { template } from './modules'

const logger = createLogger();
const middleware = applyMiddleware(thunk , promise, logger);

export default (data = {}) => {
  // rootReducer --> (Function): A reducer that invokes every reducer
  // inside the reducers object, and constructs a state object with the same shape.
  const rootReducer = combineReducers({
    // every modules reducer should be define here
    // if your reducers are --> { reducer1: ... reducer2: ... }
    // then your store shape should be {reducer1 , reducer2 }

    [template.NAME]: template.reducer
  });
  /**
   *  createStore(reducer, [initialState], [enhancer]) : store
   *  more detail --> http://redux.js.org/docs/api/createStore.html
   *  redux's official doc is very well written , please go ahead read and
   *  read that first if you haven't read before
   */
  return createStore(rootReducer, data, middleware);
}

/**
 * The store’s reducing function will be called with the current getState() result
 * and the given action synchronously. Its return value will be considered the next state.
 * It will be returned from getState() from now on,
 * and the change listeners will immediately be notified.
 */
