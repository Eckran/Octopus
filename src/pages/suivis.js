import React, {Component} from 'react'
import {View, Text, Button, Image, AppRegistry} from 'react-native'
import { StackNavigator, } from 'react-navigation'

export default class SuivisScreen extends React.Component {

    static navigationOptions = {
        title: 'Carnet de suivi',
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
                <Text> page suivis </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('SuivisScreen', () => SuivisScreen);