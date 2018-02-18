import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class SuivisScreen extends React.Component {

    render() {
        return(
            <View>
                <Text> page suivis </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('SuivisScreen', () => SuivisScreen);