/**
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
import {Actions ,Scene} from "react-native-router-flux";

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

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
    );
  }
}

export default class Home extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>首页</Text>
        <Button onPress={Actions.me}>基础</Button>
        <Button onPress={Actions.inventory}>库存</Button>
      </View>
    );
  }
}

