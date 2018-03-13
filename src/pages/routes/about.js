import React, { Component } from 'react'
import { View, ScrollView, TouchableHighlight, Text, Button, Image, StyleSheet, AppRegistry } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {

    static navigationOptions = {
        title: 'À propos',
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

        return (
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
                    <Text style={{ marginTop: -55, marginLeft: '20%', color: '#f3f4f3', fontSize: 30 }}> À propos </Text>
                </View>
                <View style={{ height: 10, }}></View>
                <View style={{ height: '87%', }}>
                    <ScrollView contentContainerStyle={styles.container}>

                        <Text style={styles.text}>À PROPOS DE NOTRE LABORATOIRE ET DE L’APPLICATION.</Text>
                        <View style={styles.block}>
                                <Image
                                    source={require('../../img/About/partenaire.jpg')}
                                    style={{ width: 100, height: 120, marginTop: '5%', marginLeft:'10%' }}
                                />
                                <Image
                                    source={require('../../img/About/partenaire.jpg')}
                                    style={{ width: 100, height: 120, marginTop: '5%', marginLeft: '20%'}}
                                />
                        </View>
                        <Text style={styles.text}>Pour en savoir plus sur la Fondation pour la Recherche Médicale ou connaitre l’association la plus proche de chez vous, veuillez consulter leur site internet : https://www.frm.org/</Text>
                        <Text style={styles.text}>Pour en savoir plus sur notre Laboratoire (LSSN) ou connaitre le Laboratoire le plus proche de chez vous, veuillez consulter notre site internet : http://www.octopuce-lssn.com/</Text>
                    </ScrollView>
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