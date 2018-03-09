import React, {Component} from 'react'
import {View, Text, Button, Image, StyleSheet, AppRegistry} from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {

    static navigationOptions = {
        title: 'Contacts',
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
                <Text> page Contact </Text>
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
        width: '155%',
        height: '200%',
        marginTop: '-18%',
        marginLeft: '-5%',
    }
})

AppRegistry.registerComponent('Contact', () => Contact);