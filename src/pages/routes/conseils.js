import React, { Component } from 'react'
import { View, ListView, ScrollView, Text, Button, Image, StyleSheet, TouchableHighlight, AppRegistry } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {


    constructor(props) {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        const dataTab = ['Conseils utilisation', 'Conseil alimentaires']
        this.state = {
            Name: ds.cloneWithRows(dataTab),
        };
    }


    static navigationOptions = {
        title: 'Conseils pratiques',
        headerStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        headerTintColor: '#f3f4f4',
        headerTitleStyle: {
            fontSize: 30,
        }
    };

    render() {

        let iconSize = 50

        return (
            <View>
                <View>
                    <View style={{ height: 100, marginTop: '-8%' }}>
                        <TouchableHighlight style={styles.backButton}>
                            <Icon
                                name='navigate-before'
                                color='#f3f4f3'
                                size={iconSize}
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </TouchableHighlight>
                        <Image
                            source={require('../../img/small-couv.png')}
                            style={styles.header}
                        />
                        <Text style={{ marginTop: -55, marginLeft: '20%', color: '#f3f4f3', fontSize: 30 }}> Conseils pratiques </Text>
                    </View>
                </View>
                <ScrollView style={{ zIndex: 2, }}>
                    <ListView
                        dataSource={this.state.Name}
                        renderRow={(rowName) =>
                            <View style={styles.case}>
                                <Text style={{ fontSize: 20, }}>{rowName}</Text>
                                <View style={{ marginTop: -50, marginLeft: '80%', }}>
                                    <Icon
                                        name='navigate-next'
                                        color='#662680'
                                        size={iconSize}
                                        onPress={() => this.props.navigation.goBack()}
                                    />
                                </View>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({


    fond: {
        backgroundColor: 'red'
    },
    header: {
        position: 'absolute',
        width: '155%',
        height: '200%',
        marginTop: '-18%',
        marginLeft: '-5%',
    },
    container: {
        justifyContent: 'center',
        marginLeft: '3%',
    },
    block: {
        flexDirection: 'row',
        marginBottom: '10%',
        zIndex: 5,
    },
    text: {
        marginTop: 10,
    },
    FondMenu: {
        width: '150%',
        height: '160%',
        marginLeft: '-10%',
        marginTop: '-40%',
    },
    backButton: {
        marginLeft: '-85%',
        marginTop: '14%',
        zIndex: 1,

    },
    case: {
        width: '100%',
        height: 80,
        borderColor: '#662680',
        borderBottomWidth: 1,
        paddingTop: 12,
        paddingLeft: 10,
        backgroundColor: '#eef3faff',
    }
})

AppRegistry.registerComponent('Contact', () => Contact);
