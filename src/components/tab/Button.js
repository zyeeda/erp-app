/**
 * Created by vimniky on 5/6/16.
 */

import React, { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 20,
    padding: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  active : {
    backgroundColor:'red',
    borderBottomWidth : 2,
    borderBottomColor : 'blue'
  }
});

const Button = (props) => {
  const { children, onClick , isActive } = props;

  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text style={isActive? styles.active : null }>{children}</Text>
    </TouchableOpacity>
  )
};
Button.PropTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  isActive : React.PropTypes.bool.isRequired
};

export default Button
