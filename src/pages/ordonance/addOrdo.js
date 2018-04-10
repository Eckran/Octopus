import React, { Component } from 'react'
import { View, Text, StyleSheet,} from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {

    static navigationOptions = {
        title: 'Ajouté',
        headerStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        headerTintColor: '#f3f4f4',
        headerTitleStyle: {
            fontSize: 30,
        },
    };


render() {

    return (
        <View>
            <Text> Add Ordonance Page</Text>
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
    },
})


// couleur bleu clair : #eef3faff
//couleur blanc : #f3f4f3
//couleur violette : #662680