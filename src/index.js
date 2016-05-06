/**
 * Created by vimniky on 5/5/16.
 */
import React, { Component ,View } from 'react-native';
import { Provider } from 'react-redux';

import { template , tab } from './modules'

import createStore from './createStore'

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <View>
        <template.App />
        <tab.App />
      </View>
    </Provider>
  )
};

export default Main


