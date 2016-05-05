/**
 *
 * Created by vimniky on 5/5/16.
 */

import React , {Component , render} from 'react-native';
import { Provider } from 'react-redux'
import App from './containers/App'
// import configureStore from './store/configureStore'
//
// const store = configureStore();

function setup() {

  class Root extends Component {
    render() {

      return (
          <App />
      );

    }
  }
  return Root ;

}

export default setup
