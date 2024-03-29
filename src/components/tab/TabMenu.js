/**
 * Created by vimniky on 5/6/16.
 */

import React, { StyleSheet, View, Text } from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    // top : 550,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
    (item , i) => {
      return <Button
        key={i}
        index={i}
        isActive={ currentActiveIndex == i }
        onClick={activate}>
        {item.title }
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
  currentActiveIndex: React.PropTypes.number.isRequired
};
export default TabMenu
