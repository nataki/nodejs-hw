/**
 * Created by Nataliia.Akimova on 2/29/2016.
 */

/*
 * Cache for unique documents
 Create function constructor for quick cache documents (eg string, objects, etc) by key with checking of the uniqueness of keys.
 Required methods: - set(key, value) - get(key) - has(key) - remove([key])

 */
var cache = require(Cache);

cache.set('stringKey', '123456789');
cache.set('objectKey', {
    name: 'name1',
    address: {
        key1: 123
    }
});

console.log(cache.has('stringKey'));
console.log(cache.get('stringKey'));

console.log(cache.has('objectKey'));
console.log(cache.get('objectKey'));

console.log(cache.remove('stringKey'));
console.log(cache.has('stringKey'));

console.log(cache.set('stringKey', '0000000'));
console.log(cache.has('stringKey'));
console.log(cache.get('stringKey'));