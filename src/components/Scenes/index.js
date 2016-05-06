/**
 * Created by vimniky on 5/4/16.
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  // TabBar,
  // Modal,
  // Schema,
  Scene,
  Reducer ,
  Actions
} from 'react-native-router-flux'

import Home from './Home'
import Inventory from './Inventory'
import Me from './Me'
import NavDrawer from './NavDrawer'
import TabView from './TabView'

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
    );
  }
}

const scenes = Actions.create(
  <Scene key="root" >
    <Scene key="home" component={Home} title="Home" icon={TabIcon} />
    <Scene  key="inventory" component={Inventory} title="Inventory" icon={TabIcon} />
    <Scene key="me" component={Me} title="Me" icon={TabIcon} />
  </Scene>
);
///
export default class Scenes extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

