import React, { Component } from 'react'
import {View,
        Text,
        Image, 
        AppRegistry,
        TouchableHighlight, 
        StyleSheet 
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import {App, RootStack, test2} from '../../App'

export default class Select extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.block}>
                    <View>
                        <TouchableHighlight  onPress={() => this.props.navigation.navigate('Suivis')}>
                            <Text>hello</Text>
                        </TouchableHighlight>
                            <Image
                                source={require('../img/hearth.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}> Carnet de suivis</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../img/calendar.png')}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Rendez-vous</Text>
                    </View>
                </View>
                <View style={styles.block}>
                    <View>
                        <Image
                            source={require('../img/ordonance.png')}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Ordonance</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../img/rappel.png')}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Rappels</Text>
                    </View>
                </View> 
                <View style={styles.block}>
                    <View>
                        <Image
                            source={require('../img/phone.png')}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Contact</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../img/cog.png')}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Paramétres</Text>
                    </View>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        zIndex: 1,
    },

    block: {
        flexDirection: 'row', 
        marginLeft: -160,
        marginTop: 15,
        maxWidth: 200,
    },

    image: {
        width: 180,
        height: 180,
    },

    text: {
        textAlign: 'center',
        marginTop: -30,
        fontSize: 20,
    }

});

AppRegistry.registerComponent('Main Menu', () => Select);