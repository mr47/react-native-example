/**
 * Created by dmitrypoddubniy on 06.03.17.
 */

import * as actions from '../actions/servicesActionTypes'

const loader = (state = false, action = {})=>{
    switch (action.type){
        case actions.SET_LOADER_STATE: {
            return action.payload;
        } break;

        default:
            return state;
    }
};
export default loader;