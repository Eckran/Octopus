import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Icon } from 'react-native-elements'
import { DrawerNavigator, NavigationActions } from 'react-navigation'

//route
import { Stack } from './RootStack'
import Donnees from '../pages/routes/Donees'
import Moi from '../pages/routes/moi'
import Conseils from '../pages/routes/conseils'
import Probleme from '../pages/routes/probleme'
import About from '../pages/routes/about'
import Information from '../pages/routes/information'

const Drawer = DrawerNavigator({
    Menu: {
        screen: Stack,
    },
    Donnees: {
        screen: Donnees,
    },
    Moi: {
        screen: Moi,
    },
    Conseils: {
        screen: Conseils,
    },
    About: {
        screen: About,
    },
    Information: {
        screen: Information,
    },
})

const iconSize = 50

export const MenuButton = (props) => {
    return (
        <Icon
            name='menu'
            color='#662680'
            size={iconSize}
            onPress={() => props.navigate('DrawerToggle')}
        />
    )
}

export default class DrawerNav extends React.Component {

    render() {
        return (
            <Drawer />
        )
    }
}

AppRegistry.registerComponent('DrawerNav', () => DrawerNav);