/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import { rootReducer } from './../reducers/'

// middleware
import thunk from 'redux-thunk'

// base
import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

export const RouterWithRedux = connect()(Router);

// store creaction also can be added somethings different
const middleware = [thunk, /* ...your middleware */];

export const store = compose(
    applyMiddleware(...middleware)
)(createStore)(rootReducer);

export default store;