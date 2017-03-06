/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { RouterWithRedux, store } from './../store/configureStore'
import { scenes } from '../scenes/index'
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/';

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store={store}>
                <RouterWithRedux scenes={scenes} />
            </Provider>

        );
    }
}

export default App;