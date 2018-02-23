import React from 'react';
import {AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import {NavigationActions, DrawerNavigator, StackNavigator} from 'react-navigation'

import DrawerNav from './src/navigation/Navigation'
import Register from './src/pages/login/register'
import Login from './src/pages/login/login'

export default class App extends React.Component {

  render() {
    return <Register />;
  }
}


AppRegistry.registerComponent('App', () => App);