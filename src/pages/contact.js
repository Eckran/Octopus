import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {

    render() {
        return(
            <View>
                <Text> page Contact </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('Contact', () => Contact);