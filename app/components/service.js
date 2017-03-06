/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native'
import Separator from './../components/separator';

export default class Service extends Component{
    render(){
        let { name, image, description, price, duration, displayOptions} = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.imageHolder}>
                        <Image source={image} resizeMode={'contain'} style={styles.image}/>
                    </View>
                    <View style={styles.imageSeparator}>
                        <Separator color={'#d65b7f'} height={5} />
                    </View>
                    <View>
                        <View style={styles.textHolder}>
                            <Text style={styles.label}>Description</Text>
                            <Text style={styles.subText}>
                                {description.length > 0 ? description: 'There is no data'}
                            </Text>
                        </View>
                        <Separator />
                        {
                            displayOptions.showPrice?
                                <View>
                                    <View style={styles.textHolder}>
                                        <Text style={styles.label}>Price</Text>
                                        <Text style={styles.subText}>
                                            {price}{displayOptions.valt}
                                        </Text>
                                    </View>
                                    <Separator />
                                </View> : <Text />
                        }
                        {
                            displayOptions.showDuration?
                                <View>
                                    <View style={styles.textHolder}>
                                        <Text style={styles.label}>Duration</Text>
                                        <Text style={styles.subText}>
                                            {duration}{displayOptions.durationLabel}
                                        </Text>
                                    </View>
                                    <Separator />
                                </View> : <Text />
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: '#1c1d21',
        justifyContent: 'flex-start'
    },
    label: {
        color: '#2a2d32',
        fontSize: 10
    },
    subText: {
        paddingTop: 5,
        color: '#e5e6e9',
        marginTop: 5
    },
    textHolder: {
        padding: 20
    },
    name: {
        color: '#e5e6e9',
        fontSize: 40,
        textAlign: 'center'

    },
    imageHolder: {
        paddingTop: 20,
        alignItems: 'center'
    },
    image: {
        width: 640,
        height: 250
    },
    imageSeparator: {
        paddingTop: 10
    }
});