/**
 * Created by vimniky on 5/6/16.
 */

import React, { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 20,
    padding: 20,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active : {
    backgroundColor:'red',
    borderBottomWidth : 2,
    borderBottomColor : 'blue'
  }
});

const Button = (props) => {
  const { children, onClick , isActive , index } = props;
  return (
    <TouchableOpacity
      onPress={() => onClick(index)}
      style={[styles.button ,isActive?  styles.active: null]}>
      <Text >{children}</Text>
    </TouchableOpacity>
  )
};
Button.PropTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  isActive : React.PropTypes.bool.isRequired,
  index : React.PropTypes.bool.isRequired
};

export default Button
