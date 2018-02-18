import React, { component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Header from './../component/header'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.container2}>
          <View style={styles.block}>
            <View>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Suivis')} >
                <View>
                  <Image
                    source={require('../img/hearth.png')}
                    style={styles.image}
                  />
                  <Text style={styles.text}> Carnet de suivis</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('RendezVous')} >
                <View>
                  <Image
                    source={require('../img/calendar.png')}
                    style={styles.image}
                  />
                  <Text style={styles.text}> Rendez-vous</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.block}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Ordonance')} >
              <View>
                <Image
                  source={require('../img/ordonance.png')}
                  style={styles.image}
                />
                <Text style={styles.text}> Ordonances</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Rappels')} >
              <View>
                <Image
                  source={require('../img/rappel.png')}
                  style={styles.image}
                />
                <Text style={styles.text}> Rappels</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.block}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Contact')} >
              <View>
                <Image
                  source={require('../img/phone.png')}
                  style={styles.image}
                />
                <Text style={styles.text}> Contact</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Cog')} >
              <View>
                <Image
                  source={require('../img/cog.png')}
                  style={styles.image}
                />
                <Text style={styles.text}> Paramétres</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
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
  container2: {
    marginTop: 30,
    zIndex: 1,
  },

  block: {
    flexDirection: 'row',
    marginLeft: -160,
    marginTop: 15,
    maxWidth: 200,
  },

  image: {
    width: 180,
    height: 180,
  },

  text: {
    textAlign: 'center',
    marginTop: -30,
    fontSize: 20,
  }

});
