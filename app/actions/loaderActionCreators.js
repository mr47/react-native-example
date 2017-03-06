/**
 * Created by dmitrypoddubniy on 06.03.17.
 */
import * as ActionsConst from './servicesActionTypes'

export const setLoaderState = (value) => ({
    type: ActionsConst.SET_LOADER_STATE,
    payload: value
});