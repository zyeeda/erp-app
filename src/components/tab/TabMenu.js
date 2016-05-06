/**
 * Created by vimniky on 5/6/16.
 */

import React, { StyleSheet, View, Text } from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    width: 40,
    textAlign: 'center'
  }
});

const TabMenu = (props) => {
  const { activate } = props;

  return (
    <View style={styles.container}>
      <Button onclick={activate}> 首页 </Button>
    </View>
  );
};

TabMenu.propTypes = {
  activate: React.PropTypes.func.isRequired
};

export default TabMenu
