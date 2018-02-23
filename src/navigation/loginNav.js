import React from 'react';
import {AppRegistry} from 'react-native'
import {Icon} from 'react-native-elements'
import { StackNavigator, NavigationActions } from 'react-navigation';

import Login from '../pages/login/login'
import Register from '../pages/login/register'

//route
const LoginStack = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        Register: {
            screen: Register,
        },
    },
    {
        initialRouteName: 'Login',
    }
);

export default class Stack extends React.Component {

    render() {
        return (<LoginStack />);
    }
}
