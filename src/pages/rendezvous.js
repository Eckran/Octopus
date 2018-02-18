import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class RendezVous extends React.Component {

    render() {
        return(
            <View>
                <Text> page Rendez-vous </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('RendezVous', () => RendezVous);