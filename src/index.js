/**
 * Created by vimniky on 5/5/16.
 */
import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import { template } from './modules'
// import { tab } from './modules'
// <tab.App/>
import createStore from './createStore'

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <template.App />
    </Provider>
  )
};

export default Main

