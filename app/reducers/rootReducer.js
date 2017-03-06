/**
 * Created by dmitrypoddubniy on 04.03.17.
 */
import { combineReducers } from 'redux'

import routes from './routes'
import { services, service } from './services'
import loaded from './loader';

export const rootReducer = combineReducers({
    routes,
    active: service,
    services,
    loaded
});