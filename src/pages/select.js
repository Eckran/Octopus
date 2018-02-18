import React, { Component } from 'react'
import { View, Text, Image, AppRegistry, StyleSheet } from 'react-native'

export default class Select extends Component {
    render() {
        let hearth = {
            uri: require('./../img/hearth.png')
        }

        let rendezvous = {
            uri: require('./../img/calendar.png')
        }

        let ordonance = {
            uri: require('./../img/ordonance.png')
        }

        let rappel = {
            uri: require('./../img/rappel.png')
        }

        let contact = {
            uri: require('./../img/phone.png')
        }

        let cog = {
            uri: require('./../img/cog.png')
        }

        return (
            <View style={styles.container}>
                <View style={styles.block}>
                    <View>
                        <Image
                            source={hearth.uri}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Carnet de suivis</Text>
                    </View>
                    <View>
                        <Image
                            source={rendezvous.uri}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Rendez-vous</Text>
                    </View>
                </View>
                <View style={styles.block}>
                    <View>
                        <Image
                            source={ordonance.uri}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Ordonance</Text>
                    </View>
                    <View>
                        <Image
                            source={rappel.uri}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Rappels</Text>
                    </View>
                </View> 
                <View style={styles.block}>
                    <View>
                        <Image
                            source={contact.uri}
                            style={styles.image}
                        />
                        <Text style={styles.text}> Contact</Text>
                    </View>
                    <View>
                        <Image
                            source={cog.uri}
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