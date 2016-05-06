/**
 * Created by vimniky on 5/6/16.
 */


import React, { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { TabMenu } from './../../components/tab'
import * as actions from './actions'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// }) ;

const App = (props) => {
  // const {
  //   currentActiveIndex,
  //   activate
  // } = props ;
  return (
    <View style={styles.container}>
      <TabMenu {...props} />
    </View>
  );

} ;

App.displayName = 'Tab';

App.propTypes = {
  activate: React.PropTypes.func.isRequired,
  currentActiveIndex: React.PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (index) => {
      dispatch(actions.activate(index))
    }
  }
};

const mapStateToProps = (state) => {
  return {
    currentActiveIndex: state.tab.currentActiveIndex
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
