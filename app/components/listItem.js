/**
 * Created by dmitrypoddubniy on 04.03.17.
 */


import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'

export default class ListItem extends Component{
    constructor(props){
        super(props);

        this.setActive = ()=>{
            console.log(this.props);
            this.props.setActiveService(this.props.item);
        }
    }
    render(){
        let { setActive } = this;
        let { name, image, description, price, duration, displayOptions} = this.props.item;
        return (
            <TouchableHighlight onPress={setActive}  underlayColor={'#272b30'}>
                <View style={styles.container}>
                    <View style={styles.line} />
                    <View style={styles.imageHolder}>
                        <Image source={image} resizeMode={'cover'} style={styles.image}/>
                    </View>
                    <View style={styles.descriptionHolder}>
                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.description}>
                            <Text style={styles.descriptionLabel}>
                                {displayOptions.showDuration?`${duration}${displayOptions.durationLabel} `:''}
                                {displayOptions.showDuration && displayOptions.showPrice?' / ': ''}
                                {displayOptions.showPrice?`${price}${displayOptions.valt}  `:''}
                            </Text>
                            {description.length > 0?`${description}`:''}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    imageHolder:{
        flex: 1
    },
    image: {
        width: 60,
        height: 60
    },
    name: {
        color: '#e5e6e9',
        fontSize: 20
    },
    descriptionHolder: {
        flex: 5,
        marginLeft: 10,
        paddingTop: 6,
        paddingLeft: 10
    },
    description: {
        color: '#4b4f54',
        fontSize: 15
    },
    descriptionLabel: {
        color: '#676b70'
    },
    line: {
        width: 3,
        height: 60,
        marginRight: 5,
        backgroundColor: '#d65b7f'
    },
    price: {

    }
});