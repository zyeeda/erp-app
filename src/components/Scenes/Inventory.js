/**
 *
 * Created by vimniky on 5/4/16.
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderWidth : 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color : 'red'
  },
});

export default class Inventory extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> 库存 </Text>
        <Button onPress={Actions.home}>首页</Button>
        <Button onPress={Actions.me}>基础</Button>
      </View>
    );
  }
}

