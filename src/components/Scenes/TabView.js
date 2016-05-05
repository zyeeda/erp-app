/**
 *
 * Created by vimniky on 5/4/16.
 */
import React, {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default class TabView extends React.Component {
  render(){
    var {View, Text} = React;
    var Button = require("react-native-button");
    var Actions = require("react-native-router-flux").Actions;
    const drawer = this.context.drawer;
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
      </View>
    );
  }
}

TabView.contextTypes = {
  drawer: React.PropTypes.object
};
