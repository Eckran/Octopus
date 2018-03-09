import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, Image, Button, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

import * as firebase from "firebase";

import '../login/register'

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pseudo: 'Pseudo',
            password: 'Mot de passe',
            users: [],
        }
    }

    console = () => {
        console.log(this.state.pseudoId)
    }

    connected = () => {
        let recentPostsRef = firebase.database().ref('/users');

        recentPostsRef.once('value').then(snapshot => { // get references de /user
            userList = snapshot.val()
            snapshot.forEach(user => { // boucle a travers les users en bases
                var userFormated = user.val();
                this.setState({
                    users: userFormated
                })
                if (this.state.pseudo === userFormated.pseudo && this.state.password === userFormated.password) {
                    console.log('nice')
                    this.props.navigation.navigate('Home')
                } 
            })
        })
    }


    render() {

        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/logo-connexion.png')}
                    style={styles.logoC}
                />
                <View style={styles.ConnectBox}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, color: '#662680', marginTop: 6, }}>
                            Connexion
                    </Text>
                        <Image
                            source={require('../../img/trait-input.png')}
                            style={{ width: 95, height: 40, marginTop: -13, }}
                        />
                    </View>
                    <Image
                        source={require('../../img/sconnex.png')}
                        style={{ width: 10, height: 50, marginLeft: 10, marginRight: 10, }}
                    />
                    <Button
                        title="Inscription"
                        onPress={() => this.props.navigation.navigate('Register')}
                        color='grey'
                    />
                </View>
                <View style={{ marginBottom: 30, }}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(text) => this.setState({ pseudo: text, })}
                        placeholder={this.state.pseudo}
                    />
                    <Image
                        source={require('../../img/trait-input.png')}
                        style={styles.trait}
                    />
                    <TextInput
                        style={styles.Input}
                        onChangeText={(text) => this.setState({ password: text, })}
                        placeholder={this.state.password}
                    />
                    <Image
                        source={require('../../img/trait-input.png')}
                        style={styles.trait}
                    />
                </View>
                <View style={styles.check}>
                    <TouchableHighlight
                        onPress={this.console}
                        style={{ width: 200, height: 20, }}
                    >
                        <View>
                            <Text style={{ fontSize: 15, color: '#000', textAlign: 'center', }}> Mot de passe oublié ? </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    onPress={this.connected}
                    style={styles.validate}
                >
                    <View>
                        <Text style={{ fontSize: 20, color: '#f3f4f3', textAlign: 'center', }}> VALIDER </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f3'
    },
    ConnectBox: {
        flexDirection: 'row',
    },
    sepa: {
    },
    check: {
        flexDirection: 'row',
    },
    logoC: {
        width: 250,
        height: 170,
        marginBottom: 30,
    },
    Input: {
        height: 40,
        width: 300,
        marginTop: 10,
        fontSize: 20,
    },
    validate: {
        height: 50,
        width: 220,
        backgroundColor: '#662680',
        borderRadius: 50,
        marginTop: 50,
        paddingTop: 12,
    },
    trait: {
        width: 300,
        height: 30,
        marginTop: -20,
        marginBottom: -5,
        marginLeft: -12,
    }

});