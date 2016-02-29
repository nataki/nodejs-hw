/**
 * Created by Nataliia.Akimova on 2/29/2016.
 */
'use strict';

class Cache {
    constructor(){
        this.storage = {};
    }
    setValue(key, value){
        this.storage[key] = value;
    }
    getValue(key){
        return this.storage[key];
    }
    has(key){
        return !!this.storage[key];
    }
    remove(key){
        delete this.storage[key];
    }
}

module.exports = Cache;