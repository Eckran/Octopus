import React from 'react';
import {AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import { StackNavigator, NavigationActions } from 'react-navigation';


import Ordonance from '../pages/ordonance/ordonance'
import Add from '../pages/ordonance/addOrdo'


//route
const OrdoNav = StackNavigator(
    {
        ordonance: {
            screen: Ordonance,
        },
        add: {
            screen: Add,
        }
    },
    {
        initialRouteName: 'Ordonance',
    }
);

export class Stack extends React.Component {

    render() {
        return (<OrdoNav />);
    }
}
