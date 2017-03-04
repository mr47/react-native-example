/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import ServicesList from './../containers/servicesList';

class Services extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ServicesList />
        );
    }
}


export default connect()(Services);