/**
 * Created by vimniky on 5/4/16.
 */
import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  PropTypes
} from 'react-native';
import MenuItem from './MenuItem'

export default class MenuBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuItem/>
      </View>
    );
  }
}

// NavBar.propTypes = {
//   text: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   active: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired
// }
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth : 1,
    borderTopColor : '#000',
    top : 100,
    bottom : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
