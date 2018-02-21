import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import All from './src/navigation/Navigation'

export default class App extends React.Component {
  render() {
    return <All />;
  }
}