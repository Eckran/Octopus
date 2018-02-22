import React from 'react';
import {AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import { StackNavigator, NavigationActions } from 'react-navigation';

import { HomeScreen } from '../pages/HomeScreen'
import Suivi from '../pages/suivis'
import RendezVous from '../pages/rendezvous'
import Ordonance from '../pages/ordonance'
import Rappels from '../pages/rappels'
import Contact from '../pages/contact'
import Cog from '../pages/cog'

//route
const RootStack = StackNavigator(
    {
        Acceuil: {
            screen: HomeScreen,
        },
        Suivi: {
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
    },
    {
        initialRouteName: 'Acceuil',
    }
);

export class Stack extends React.Component {

    render() {
        return (<RootStack screenProps={{drawerNavigation: this.props.navigation}} />);
    }
}


// AppRegistry.registerComponent('DrawerNav', () => DrawerNav);