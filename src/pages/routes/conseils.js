import React, {Component} from 'react'
import {View, Text, Button, Image, StyleSheet, TouchableHighlight, AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {

    static navigationOptions = {
        title: 'Conseils pratiques',
        headerStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        headerTintColor: '#f3f4f4',
        headerTitleStyle: {
            fontSize: 30,
        }
      };

    render() {

        let iconSize = 50

        return(
            <View>
                <View style={{ height: 100, marginTop: '-8%' }}>
                    <TouchableHighlight style={styles.backButton}>
                        <Icon
                            name='navigate-before'
                            color='#f3f4f3'
                            size={iconSize}
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </TouchableHighlight>
                    <Image
                        source={require('../../img/fondmenu.png')}
                        style={styles.FondMenu}
                    />
                    <Text style={{ marginTop: -55, marginLeft: '20%', color: '#f3f4f3', fontSize: 30 }}> Conseils pratiques </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        position: 'absolute',
        width: 400,
        height: 80,
    },
    container: {
        justifyContent: 'center',
        marginLeft: '3%',
    },
    block: {
        flexDirection: 'row',
        marginBottom: '10%',
        zIndex: 5,
      },
    text: {
        marginTop: 10,
    },
    FondMenu: {
        width: '150%',
        height: '160%',
        marginLeft: '-10%',
        marginTop: '-40%',
    },
    backButton: {
        marginLeft: '-85%',
        marginTop: '14%',
        zIndex: 1,

    },
})

AppRegistry.registerComponent('Contact', () => Contact);