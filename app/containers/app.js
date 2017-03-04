/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { RouterWithRedux, store } from './../store/'
import { scenes } from '../scenes/index'

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