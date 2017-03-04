/**
 * Created by dmitrypoddubniy on 04.03.17.
 */
import { ActionConst } from 'react-native-router-flux'

const initialState = {
    scene: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        // focus action is dispatched when a new screen comes into focus
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene,
            };

        default:
            return state;
    }
}
