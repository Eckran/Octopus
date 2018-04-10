import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
    TouchableHighlight,
    ListView,
    StyleSheet,
    AppRegistry
} from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

import OrdoNav from '../../navigation/ordonnanceNav'

export default class Ordonance extends React.Component {

    constructor(props) {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        const dataTab = ['Patrick Bruel', 'Patrick Bruel']
        this.state = {
            Name: ds.cloneWithRows(dataTab),
        };
    }



    static navigationOptions = {
        title: 'Ordonnances',
        headerStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        headerTintColor: '#f3f4f4',
        headerTitleStyle: {
            fontSize: 30,
        },
        headerRight: <Icon
            name='add-circle-outline'
            color='#f3f4f4'
            onPress={() => this.props.navigation.navigate('Add')}
        />,
    };


render() {

    let iconSize = 50

    return (
        <View>
            <View>
                <Image
                    source={require('../../img/small-couv.png')}
                    style={styles.header}
                />
            </View>
            <ScrollView style={{ zIndex: 2, }}>
                <ListView
                    dataSource={this.state.Name}
                    renderRow={(rowName) =>
                        <View style={styles.case}>
                            <Text style={{ fontSize: 20, }}>Date</Text>
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
    case: {
        width: '100%',
        height: 80,
        borderColor: '#662680',
        borderBottomWidth: 1,
        paddingTop: 12,
        paddingLeft: 10,
        backgroundColor: '#eef3faff',
    },
})



// couleur bleu clair : #eef3faff
//couleur blanc : #f3f4f3
//couleur violette : #662680