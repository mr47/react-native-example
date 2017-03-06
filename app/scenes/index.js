/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import ServicesScreen from './../screens/services';
import ServiceScreen from './../screens/serviceView';
import ServiceAddScreen from './../screens/serviceAdd';

export const scenes = Actions.create(
    <Scene key="root">
        <Scene key="services" intial={true} title="My Services" rightTitle="+" onRight={()=>{Actions.serviceAdd()}} component={ServicesScreen} />
        <Scene key="serviceAdd" title="Add Service" component={ServiceAddScreen}/>
        <Scene key="service" component={ServiceScreen}/>
    </Scene>
);