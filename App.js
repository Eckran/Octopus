import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/pages/homeScreen'
import SuivisScreen from './src/pages/suivis'
import RendezVous from './src/pages/rendezvous'
import Ordonances from './src/pages/ordonance'
import Rappels from './src/pages/rappels'
import Contact from './src/pages/contact'
import Cog from './src/pages/cog'

export const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Suivis: {
      screen: SuivisScreen,
    },
    RendezVous: {
      screen: RendezVous,
    },
    Ordonance: {
      screen: Ordonances,
    },
    Rappels: {
      screen: Rappels,
    },
    Contact: {
      screen: Contact,
    },
    Cog: {
      screen: Cog,
    },
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