import React, {Component} from 'react'
import {View, Text, AppRegistry, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

import MenuNav from './menuNav'

export default class Menu extends Component {

    constructor(props) {
        super(props)
        this.state= {
            menuDisplay: 'none',
        }
    }

    openMenu = () => {
        if(this.state.menuDisplay === 'none'){
            this.setState({
                menuDisplay: 'block',
            })
        }else {
            this.setState({
                menuDisplay: 'none',
            })
        }
    }

    render(){
        let iconSize = 50

        return(
            <View style={styles.button}>
                <Icon 
                    name='menu'
                    color='#fff'
                    size= {iconSize}
                    onPress= {this.openMenu}
                />
                <View display={this.state.menuDisplay}>
                <MenuNav />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginLeft: -300,
        marginTop: -55,
    },
  });

AppRegistry.registerComponent('Menu', () => Menu);