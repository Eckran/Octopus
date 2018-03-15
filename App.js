import React from 'react';
import {AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import {NavigationActions, DrawerNavigator, StackNavigator} from 'react-navigation'

import LoginNav from './src/navigation/loginNav'

export default class App extends React.Component {

  render() {
    return <LoginNav />;
  }
}


AppRegistry.registerComponent('App', () => App);