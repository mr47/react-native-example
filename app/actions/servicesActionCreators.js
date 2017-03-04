/**
 * Created by dmitrypoddubniy on 04.03.17.
 */
import * as ActionsConst from './services'

export const setActiveService = (id) => ({
    type: ActionsConst.SET_ACTIVE_SERVICE,
    id
});