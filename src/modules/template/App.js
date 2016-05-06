/**
 * Created by vimniky on 5/5/16.
 */

import React, { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Counters, Counter } from './../../components/template'
import * as actions from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}) ;

const renderCounters = (counters, decrement, increment, incrementWithDelay) => {
  return Object.keys(counters).map((id) => {
    const value = counters[id];
    return (
      <Counter
        key={id}
        decrementFn={() => decrement(id)}
        incrementFn={() => increment(id)}
        incrementWithDelayFn={() => incrementWithDelay(id)}>
        {value}
      </Counter>
    )
  })
} ;

const App = (props) => {
  const {
    addNewCounter,
    counters,
    decrement,
    increment,
    incrementWithDelay
  } = props ;

  return (
    <View style={styles.container}>
      <Counters addFn={addNewCounter}>
        {renderCounters(counters, decrement, increment, incrementWithDelay)}
      </Counters>
    </View>
  )
};

App.displayName = 'template';

App.propTypes = {
  addNewCounter: React.PropTypes.func.isRequired,
  counters: React.PropTypes.object.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired,
  incrementWithDelay: React.PropTypes.func.isRequired
};

export default connect(
  (state) => ({
    counters: state.template.counters
  }),
  (dispatch) => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    increment: (id) => dispatch(actions.increment(id)),
    decrement: (id) => dispatch(actions.decrement(id)),
    incrementWithDelay: (id) => dispatch(actions.incrementWithDelay(id))
  })
)(App)
