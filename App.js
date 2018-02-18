import React, {component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/component/header'
import Select from './src/pages/select'

export default class App extends React.Component {
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
