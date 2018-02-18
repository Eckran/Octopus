import React, {component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Header from './../component/header'
import Select from './select'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Select />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff7f9',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
