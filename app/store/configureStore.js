/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import { rootReducer } from './../reducers/'

// middleware
import thunk from 'redux-thunk'
import AsyncStore from './asyncStore';

// base
import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

export const RouterWithRedux = connect()(Router);

// store creaction also can be added somethings different
const middleware = [thunk, /* ...your middleware */];

export const store = compose(
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)(createStore)(rootReducer);

store.subscribe(() => {
    console.log('saved', store.getState());
    AsyncStore.setItem('state', JSON.stringify(store.getState()));
});

export default store;