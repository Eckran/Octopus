import React from 'react';
import {AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import {NavigationActions, DrawerNavigator, StackNavigator} from 'react-navigation'

import DrawerNav from './src/navigation/Navigation'

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return <DrawerNav  />;
  }
}


AppRegistry.registerComponent('App', () => App);