import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Rappels extends React.Component {

    render() {
        return(
            <View>
                <Text> page RRappels </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('Rappels', () => Rappels);