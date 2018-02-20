import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class RendezVous extends React.Component {


    static navigationOptions = {
        title: 'Rendez-vous',
        headerStyle: {
            backgroundColor: '#662680',
        },
        headerTintColor: '#f3f4f4',
        headerTitleStyle: {
            fontSize: 30,
        }
      };


    render() {
        return(
            <View>
                <Text> page Rendez-vous </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('RendezVous', () => RendezVous);