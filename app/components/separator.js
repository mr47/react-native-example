/**
 * Created by dmitrypoddubniy on 05.03.17.
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import isUndefined from 'lodash/isUndefined';

export default class Separator extends Component{
    render(){
        return (
            <View style={
                {
                    ...style,
                    backgroundColor: this.props.color || style.backgroundColor,
                    height: this.props.height || style.height,
                    marginLeft: (!isUndefined(this.props.marginLeft) ? this.props.marginLeft: style.marginLeft)
                }
            } />
        );
    }
}

const style = StyleSheet.flatten({
    height: 1,
    backgroundColor: '#27282c',
    marginLeft: 20
});