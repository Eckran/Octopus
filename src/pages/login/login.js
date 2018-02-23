import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, Image, Button, StyleSheet } from 'react-native'
import {StackNavigator} from 'react-navigation'

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pseudo: 'Pseudo',
            password: 'Mot de passe'
        }
    }

    console = () => {
        console.log('hello')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/logo-connexion.png')}
                    style={styles.logoC}
                />
                <View style={styles.ConnectBox}>
                    <Text style={{fontSize: 20, color: '#662680', marginTop: 6,}}> 
                        Connexion 
                    </Text>
                    <Image 
                        source={require('../../img/sconnex.png')}
                        style={{width: 10, height: 50, marginLeft: 10, marginRight: 10,}}
                    />
                    <Button
                        title="Inscription"
                        onPress={this.console}
                        color= 'grey'
                    />
                </View>
                <View style={{marginBottom: 30,}}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(text) => this.setState({ pseudo: text, })}
                        placeholder={this.state.pseudo}
                    />
                    <TextInput
                        style={styles.Input}
                        onChangeText={(text) => this.setState({ password: text, })}
                        placeholder={this.state.password}
                    />
                </View>
                <View style={styles.check}>
                    <Text style={{marginTop: 11,}}> Se souvenir de moi </Text>
                    <Button
                        title='Mot de passe oublié?'
                        onPress={this.console}
                        color= '#000'
                    />
                </View>
                <Button 
                    title='test'
                    onPress={this.postData}
                />
                <TouchableHighlight
                    onPress={this.console}
                    style={styles.validate}
                >
                    <View>
                        <Text style={{fontSize: 20, color: '#f3f4f3', textAlign: 'center',}}> VALIDER </Text>
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
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 10,
    },
    validate:{
        height: 50,
        width: 220,
        backgroundColor: '#662680',
        borderRadius: 50,
        marginTop: 50,
        paddingTop: 12,
    }

});