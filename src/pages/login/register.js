import React, { Component } from 'react'
import { View, Button, Image, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'

import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDY3l9P15unWZ7JlJoXs5MyFkgOVsqQdMI",
    authDomain: "octopuce-c4816",
    databaseURL: "https://octopuce-c4816.firebaseio.com/",
    storageBucket: "octopuce-c4816.appspot.com",
};
firebase.initializeApp(config);

export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pseudo: 'Pseudo',
            puceId: 'Numéro puce',
            password: 'Mot de passe',
            confirmPassword: 'Confirmer mot de passe',
            mail: 'exemple@exemple.com'
        }
    }

    static navigationOptions = {
        title: 'Inscription',
        headerStyle: {
            backgroundColor: '#f3f4f3',
        },
        headerTintColor: '#662680',
        headerTitleStyle: {
            fontSize: 30,
        }
    };

    postData = () => {
        console.log('init')
        const postData = {
            pseudo: this.state.pseudo,
            puceId: this.state.puceId,
            password: this.state.password,
            mail: this.state.mail,

        };

        if (this.state.password === this.state.confirmPassword) {

            const newPostKey = firebase.database().ref().child('users').push().key;
            let updates = {};

            updates['/users/' + newPostKey] = postData;

            firebase.database().ref().update(updates);
            alert(title = "Compte créé", message = "Votre compte à bien été créé", )
            console.log('finish')

        } else {

            alert('Erreur entre les mots de passes, Veuillez ressayer')

        }

    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={require('../../img/logo-connexion.png')}
                    style={styles.logoC}
                />
                <View style={styles.ConnectBox}>
                    <Button
                        title="Connexion"
                        onPress={() => this.props.navigation.goBack()}
                        color='grey'
                    />
                    <Image
                        source={require('../../img/sconnex.png')}
                        style={{ width: 10, height: 50, marginRight: 10, }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, color: '#662680', marginTop: 6, }}>
                            Inscription
                    </Text>
                        <Image
                            source={require('../../img/trait-input.png')}
                            style={{ width: 95, height: 40, marginTop: -13, }}
                        />
                    </View>
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
                        onChangeText={(text) => this.setState({ puceId: text, })}
                        placeholder={this.state.puceId}
                    />
                    <Image
                        source={require('../../img/trait-input.png')}
                        style={styles.trait}
                    />
                    <TextInput
                        style={styles.Input}
                        onChangeText={(text) => this.setState({ mail: text, })}
                        placeholder={this.state.mail}
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
                    <TextInput
                        style={styles.Input}
                        onChangeText={(text) => this.setState({ confirmPassword: text, })}
                        placeholder={this.state.confirmPassword}
                    />
                    <Image
                        source={require('../../img/trait-input.png')}
                        style={styles.trait}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.postData}
                    style={styles.validate}
                >
                    <View>
                        <Text style={{ fontSize: 20, color: '#f3f4f3', textAlign: 'center', }}> S'INSCRIRE </Text>
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
        marginTop: 0,
        paddingTop: 12,
    },
    trait: {
        width: 300,
        height: 30,
        marginTop: -20,
        marginBottom: -5,
        marginLeft: -12,
    },
    ConnectBox: {
        flexDirection: 'row',
    },
});