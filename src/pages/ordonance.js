import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Ordonances extends React.Component {

    render() {
        return(
            <View>
                <Text>page des Ordonances </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('Ordonances', () => Ordonances);