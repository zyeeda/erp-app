/**
 * Created by vimniky on 5/4/16.
 */

import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  PropTypes,
  TabBarIOS,
} from 'react-native';
// var Icon = require('react-native-vector-icons/FontAwesome');
// <Icon name="rocket" size={30} color="#900" />
export default class MenuItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
// MenuItem.propTypes = {
//   text: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   active: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired
// }
var styles = StyleSheet.create({
  container: {
    backgroundColor : 'gray'
  }
});
