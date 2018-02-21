import React, {Component} from 'react'
import {View} from 'react-native'
import {DrawerNavigator} from 'react-navigation'

//route
import { Stack } from './RootStack'
import Suivi from '../pages/suivis'
import RendezVous from '../pages/rendezvous'
import Ordonance from '../pages/ordonance'
import Rappels from '../pages/rappels'
import Contact from '../pages/contact'
import Cog from '../pages/cog'

const Drawer = DrawerNavigator({
    Acceuil: {
        screen: Stack,
    },
    Carnet: {
        screen: Suivi,
    },
    RendezVous: {
        screen: RendezVous,
    },
    Ordonance: {
        screen: Ordonance,
    },
    Rappels: {
        screen: Rappels,
    },
    Contact: {
        screen: Contact,
    },
    Cog: {
        screen: Cog,
    },
})

export default class DrawerNav extends React.Component {
    render(){
    return (
    <Drawer />
    ) 
    }
}