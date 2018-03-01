import React, { component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation'

import DrawerNav from '../navigation/Navigation'

import {MenuButton} from '../navigation/Navigation'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../img/logo.png')}
        style={{ width: 250, height: 50 }}
      />
    );
  }
}

export class HomeScreen extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: <LogoTitle />,
    headerLeft: <MenuButton navigate={screenProps.drawerNavigation.navigate} />,
  })

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../img/fondmenu.png')}
          style={styles.FondMenu}
        />
        <View style={styles.block}>
          <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Suivi')} >
              <View>
                <Image
                  source={require('../img/hearth.png')}
                  style={styles.image}
                />
                <Text style={styles.text}> Carnet de suivi</Text>
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
              <Text style={styles.text}> Contacts</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Cog')} >
            <View>
              <Image
                source={require('../img/cog.png')}
                style={styles.image}
              />
              <Text style={styles.text}> Paramètres</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80,
  },

  block: {
    flexDirection: 'row',
    marginLeft: -160,
    marginTop: 15,
    maxWidth: 200,
    zIndex: 5,
  },

  image: {
    width: 180,
    height: 180,
    zIndex: 5,
  },

  text: {
    textAlign: 'center',
    marginTop: -50,
    fontSize: 20,
    color: "#f3f4f3"
  },

  FondMenu: {
    zIndex: 1,
    position: 'absolute',
    width: 400,
    height: 800,
  }

});
