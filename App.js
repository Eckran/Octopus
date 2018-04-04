import React from 'react';
import {AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import {NavigationActions, DrawerNavigator, StackNavigator} from 'react-navigation'

import LoginNav from './src/navigation/loginNav'
import Drawer from './src/navigation/Navigation'

export default class App extends React.Component {

  render() {
    return <Drawer />;
  }
}


AppRegistry.registerComponent('App', () => App);