/**
 * Created by dmitrypoddubniy on 04.03.17.
 */

import * as actions from './../actions/'

const initialServiceState = null;
const initialServicesState = [
    {
        id: 123,
        name: 'Child\'s Haircut',
        price: 5.5,
        description: '',
        duration: 3,
        image: require('./../../resources/images/kids-fun-cuts.png'),
        displayOptions: {
            showPrice: true,
            valt: '$',
            durationLabel: 'h'
        }
    },
    {
        id: 345,
        name: 'Barber shop',
        price: 10.0,
        description: 'only men\'s shop',
        duration: 2,
        image: require('./../../resources/images/nike-barbershop-1.jpg'),
        displayOptions: {
            showPrice: true,
            valt: '$',
            durationLabel: 'h'
        }
    },
    {
        id: 789,
        name: 'Color correction',
        price: 99.99,
        description: 'only women\'s shop',
        duration: 2,
        image: require('./../../resources/images/billys-barber-shop-park-city-gallery04.jpg'),
        displayOptions: {
            showPrice: true,
            valt: '$',
            durationLabel: 'h'
        }
    }
];

export const service = (state = initialServiceState, action = {})=>{
    switch (action.type){

        case actions.SET_ACTIVE_SERVICE: {

        } break;

        default:
            return state;
    }
};

export const services = (state = initialServicesState, action = {})=>{
    switch (action.type){

        default:
            return state;
    }
};