import React, { Component } from 'react'
import {AppRegistry, View, Image, StyleSheet} from 'react-native'

import Menu from './menu'

export default class Header extends Component {
    render() {
        let couv = {
            uri: require('./../img/small-couv.png')
          };
        let logo = {
            uri: require('./../img/logo.png')
        }
        return(
            <View style={styles.header}>
                <Image
                    source={couv.uri} 
                    style={{width:400, height:75}}
                />
                <Image 
                    source={logo.uri}
                    style={styles.logo}
                />
                <Menu />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        zIndex: 30,
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: -68,
        marginLeft: 80,
    }
  });

AppRegistry.registerComponent('Header', () => Header);