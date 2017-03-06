/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Switch, ScrollView, Button } from 'react-native'
import Separator from './../components/separator';
import throttle from 'lodash/throttle';

export default class ServiceAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0.0,
            description: '',
            duration: 0,
            image: {
                uri: 'https://scontent.cdninstagram.com/t51.2885-15/e35/17076405_1171733942949297_6259398458591936512_n.jpg'
            },
            displayOptions: {
                showPrice: true,
                showDuration: false,
                valt: '$',
                durationLabel: 'h'
            }
        };
        // can be merged or use it in different way
        this.updateName = (name) => {
            this.setState({ name });
        };
        this.updateDescription = (description)=>{
            this.setState({ description })
        };
        this.updatePrice = (price)=>{
            this.setState({ price })
        };
        this.updateDuration = (duration)=>{
            this.setState({ duration })
        };
        this.setImage = (imageURI)=>{
            // for setting image can be used custom picker for IOS
            // i really don't want to setup it now {`_`}
            // super easy https://github.com/marcshilling/react-native-image-picker
            this.setState({image: imageURI}, ()=>{
                // its for sync state setup for picker
            });
        };
        // too lazy at 1:00 am
        this.updateOption = (option, value) => {
            return () => {
                this.setState({
                    displayOptions: {
                        ...this.state.displayOptions,
                        [option]: value // dark magic
                    }
                })
            };
        };
        this.save = throttle(() => {
            this.props.addService(this.state)
        }, 500);
    }

    render() {
        let { name, image, description, price, duration, displayOptions } = this.state;
        let { updateName, updateDescription, updateOption, updatePrice, updateDuration, save } = this;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageHolder}>
                        <View style={styles.image}>
                            <Text style={styles.imageText} onPress={()=>{}}>Pick service image</Text>
                        </View>
                    </View>
                    <Separator />
                    <View>
                        <View style={styles.textHolder}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput style={styles.input} placeholder={'Set a name'} placeholderTextColor={'white'} onChangeText={updateName}/>
                        </View>
                        <Separator />
                    </View>
                    <View>
                        <View style={styles.textHolder}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput style={styles.inputTall} multiline={true} numberOfLines={4} placeholder={'Set description'} placeholderTextColor={'white'} onChangeText={updateDescription}/>
                        </View>
                        <Separator />
                    </View>
                    <View>
                        <View style={styles.textHolder}>
                            <Text style={styles.label}>Price</Text>
                            <TextInput style={styles.input} keyboardType={'numeric'} placeholder={'Set price value'} placeholderTextColor={'white'} onChangeText={updatePrice}/>
                        </View>
                        <Separator />
                    </View>
                    <View>
                        <View style={styles.textHolder}>
                            <Text style={styles.label}>Duration</Text>
                            <TextInput style={styles.input} keyboardType={'numeric'} placeholder={'Set duration value'} placeholderTextColor={'white'} onChangeText={updateDuration}/>
                        </View>
                        <Separator />
                    </View>
                    <View>
                        <View style={styles.textHolder}>
                            <Text style={styles.label}>Show price</Text>
                            <Switch style={styles.inputOption} value={displayOptions.showPrice} onValueChange={updateOption('showPrice', !displayOptions.showPrice)}/>
                        </View>
                        <Separator />
                    </View>
                    <View>
                        <View style={styles.textHolder}>
                            <Text style={styles.label}>Show duration</Text>
                            <Switch style={styles.inputOption} value={displayOptions.showDuration} onValueChange={updateOption('showDuration', !displayOptions.showDuration)}/>
                        </View>
                        <Separator />
                    </View>
                    <Button
                        onPress={save}
                        title="Save"
                        color="white"
                        accessibilityLabel="Attention it's will save all to local store"
                    />
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
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    name: {
        color: '#e5e6e9',
        fontSize: 40,
        textAlign: 'center'

    },
    imageHolder: {
        height: 150,
        margin: 20,
        backgroundColor: '#2a2d32'
    },
    image: {
        height: 250,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageText: {
        color: 'white'
    },
    imageSeparator: {
        paddingTop: 10
    },
    input: {
        height: 40,
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 0,
        paddingRight: 0,
        color: 'white',
        backgroundColor: '#1c1d21'
    },
    inputTall: {
        height: 100,
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 0,
        paddingRight: 0,
        color: 'white',
        backgroundColor: '#1c1d21'
    },
    inputOption: {
        height: 40,
        marginTop: 10
    }
});