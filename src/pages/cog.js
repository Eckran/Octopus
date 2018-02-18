import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Cog extends React.Component {

    render() {
        return(
            <View>
                <Text> page Cog </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('Cog', () => Cog);