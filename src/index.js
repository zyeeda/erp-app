/**
 * Created by vimniky on 5/5/16.
 */
import React, { Component ,View , StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { template , tab } from './modules'
import createStore from './createStore'
const store = createStore();

import Scenes from './components/Scenes'

const Main = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <template.App />
        <tab.App />
        <Scenes/>
      </View>
    </Provider>
  )
};

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row'
  }
});
