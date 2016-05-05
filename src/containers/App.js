/**
 * Created by vimniky on 5/5/16.
 */
// import Scenes from '../components/Scenes'
// export default class App extends Component {
//   render() {
//     return (
//       <Scenes/>
//     );
//   }
// }

import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import * as reducers from '../reducers';
import promiseMiddleware from 'redux-promise' ;
import CounterApp from './counterApp';

import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger();
const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware , promiseMiddleware , loggerMiddleware)
);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
