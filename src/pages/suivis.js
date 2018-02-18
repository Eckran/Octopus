import React, {Component} from 'react'
import {View, Text, AppRegistry} from 'react-native'

export default class SuivisScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>hello</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('SuivisScreen', () => SuivisScreen);