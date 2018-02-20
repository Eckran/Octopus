import React, {Component} from 'react'
import {View, Text, Button, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Ordonances extends React.Component {

    static navigationOptions = {
        title: 'Ordonnances',
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
                <Text>page des Ordonances </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('Ordonances', () => Ordonances);