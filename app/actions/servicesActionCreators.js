/**
 * Created by dmitrypoddubniy on 04.03.17.
 */
import * as ActionsConst from './servicesActionTypes'
import {Actions} from 'react-native-router-flux';
import AsyncStore from './../store/asyncStore';
import isArray from 'lodash/isArray';
import { setLoaderState } from './loaderActionCreators';

export const setActiveService = (item) => {
    Actions.service();
    return {
        type: ActionsConst.SET_ACTIVE_SERVICE,
        payload: item
    }
};

export const setSearchFilter = (text) => ({
    type: ActionsConst.FILTER_SERVICES_BY_NAME,
    payload: text
});

const addServiceSync = (item) => ({
    type: ActionsConst.ADD_SERVICE,
    payload: item
});

export const addService = (item) => {
    Actions.services();
    return (dispatch, getState) => {
        dispatch(addServiceSync(item))
    }
};

export const setupServices = (services) => ({
    type: ActionsConst.SETUP_SERVICES,
    payload: services
});

export const loadServices = () => {
    return (dispatch, getState) => {
        AsyncStore.getItem('state').then((savedState) => {
            let json = JSON.parse(savedState);
            if (!getState().loaded){
                console.log(json);
                dispatch(setLoaderState(true));
                dispatch(setupServices(isArray?json.services.items: []))
            }
        })
    }
};