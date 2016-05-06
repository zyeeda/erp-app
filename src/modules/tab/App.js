/**
 * Created by vimniky on 5/6/16.
 */
import React, { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { TabMenu } from './../../components/tab'
import * as actions from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    activate: (index) => {
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
)(TabMenu);
