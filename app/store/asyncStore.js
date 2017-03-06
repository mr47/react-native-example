/**
 * Created by dmitrypoddubniy on 06.03.17.
 */

import { AsyncStorage } from 'react-native';

// can be customized
class Store {
    constructor(){
        this.storeKey = '@grumpyStoreAppKey';
    }
    getItem(key){
        return AsyncStorage.getItem(`${this.storeKey}:${key}`);
    }
    setItem(key, value){
        return AsyncStorage.setItem(`${this.storeKey}:${key}`, value);
    }
}

export default new Store;