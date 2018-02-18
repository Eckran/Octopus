import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/pages/homeScreen'
import SuivisScreen from './src/pages/suivis'


export class test2 extends React.Component {
  render(){
    return(
      <View>
        <Text>hello test2</Text>
      </View>
    )
  }
}

export const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Suivis: {
      screen: test2,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}