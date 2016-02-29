/**
 * Created by Nataliia.Akimova on 2/29/2016.
 */

/*
 * Cache for unique documents
 Create function constructor for quick cache documents (eg string, objects, etc) by key with checking of the uniqueness of keys.
 Required methods: - set(key, value) - get(key) - has(key) - remove([key])

 */
var Cache = require('./Cache'),
    cache = new Cache();

cache.setValue('stringKey', '123456789');
cache.setValue('objectKey', {
    name: 'name1',
    address: {
        key1: 123
    }
});

console.log(cache.has('stringKey'));
console.log(cache.getValue('stringKey'));

console.log(cache.has('objectKey'));
console.log(cache.getValue('objectKey'));

cache.remove('stringKey');
console.log(cache.has('stringKey'));

cache.setValue('stringKey', '0000000');
console.log(cache.has('stringKey'));
console.log(cache.getValue('stringKey'));