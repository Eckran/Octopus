import React, {Component} from 'react'
import {View, Text, Image, AppRegistry, StyleSheet} from 'react-native'
import {Overlay} from 'react-native-elements'

export default class MenuNav extends Component {

    render(){

        let lmenu = {
            uri: require('./../img/logo-menu.png')
        }

        let sepMenu = {
            uri: require('./../img/smenu2.png')
        }

        return(

            <View>
                <View style={styles.nav}>
                    <View flexDirection= 'row'>
                        <Image 
                            source={lmenu.uri} 
                            style={styles.logo}
                        />
                        <Text style={styles.tMenu}> Menu</Text>
                    </View>
                    <View>
                        <Image
                            source={sepMenu.uri}
                            style={styles.sMenu}
                        />
                        <Text style={styles.text}>Carnet de suivis </Text>
                        <Text style={styles.text}>Rendez-Vous </Text>
                        <Text style={styles.text}>Rappels </Text>
                        <Text style={styles.text}>Ordonance </Text>
                        <Image
                            source={sepMenu.uri}
                            style={styles.sMenu}
                        />
                        <Text style={styles.text}>Contacts </Text>
                        <Text style={styles.text}>Données partagées </Text>
                        <Text style={styles.text}>A propos de moi </Text>
                        <Image
                            source={sepMenu.uri}
                            style={styles.sMenu}
                        />
                        <Text style={styles.text}>Conseil pratique </Text>
                        <Image
                            source={sepMenu.uri}
                            style={styles.sMenu}
                        />
                        <Text style={styles.text}>Signaler un problème </Text>
                        <Text style={styles.text}>Paramétres </Text>
                        <Text style={styles.text}>À propos </Text>
                        <Text style={styles.text}>Informations légales </Text>
                    </View>
                </View>
                <View style={styles.cache} >
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        width: 300,
        height: 700,
        marginTop: -62,
        marginLeft: 310,
        backgroundColor: '#eff7f9',
        position: 'absolute',
    },
    cache: {
        width: 100,
        height: 700,
        marginTop: -62,
        marginLeft: 610,
        opacity: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
    },

    logo:{
        width: 90,
        height: 75,
        marginLeft: 10,
    },

    tMenu: {
        fontSize: 50,
        color: '#662680',
        marginLeft: -10,
    },

    text: {
        marginLeft: 10,
        fontSize: 25,
    },

    sMenu: {
        width: 250,
        height: 60,
        marginTop: -10,
        marginLeft: -10,
    }
  });

AppRegistry.registerComponent('Menu', () => Menu);

