import React, {Component} from 'react'
import {View, Text, Button, Image, StyleSheet, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {

    static navigationOptions = {
        title: 'Informations légales',
        headerStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        headerTintColor: '#f3f4f4',
        headerTitleStyle: {
            fontSize: 30,
        }
      };

    render() {
        return(
            <View>
                <Text> page Information </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    fond: {
        backgroundColor: 'red'
    },
    header: {
        position: 'absolute',
        width: 400,
        height: 80,
        marginTop: -79,

    }
})

AppRegistry.registerComponent('Contact', () => Contact);