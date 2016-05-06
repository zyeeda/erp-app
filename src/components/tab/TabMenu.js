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

const items = [
  {title: '首页'},
  {title: '库存'},
  {title: '销售'},
  {title: '统计'},
  {title: '基础'}
];
const TabMenu = (props) => {
  const { activate , currentActiveIndex } = props;

  const buttons = items.map(
    (title , i) => {
      return <Button
        key={i}
        isActive={currentActiveIndex == i }
        inedex={i} onClick={activate}>
        {title}
      </Button>
    }
  );

  return (
    <View style={styles.container}>
      {buttons}
    </View>
  );
};

TabMenu.propTypes = {
  activate: React.PropTypes.func.isRequired,
  currentIndex: React.PropTypes.number.isRequired
};
export default TabMenu
