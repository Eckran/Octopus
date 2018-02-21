import React, {Component} from 'react'
import {View, Text, Button, Image, StyleSheet, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Ordonances extends React.Component {

    static navigationOptions = {
        title: 'Ordonnances',
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
                <Image
                    source={require('../img/small-couv.png')}
                    style={styles.header}
                />
                <Text>page des Ordonances </Text>
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

AppRegistry.registerComponent('Ordonances', () => Ordonances);