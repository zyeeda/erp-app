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

export default class Me extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to Me Scene !</Text>
        <Button onPress={Actions.home}>Home</Button>
        <Button onPress={Actions.inventory}>Inventory</Button>
      </View>
    );
  }
}

