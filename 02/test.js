/**
 * Created by nataki on 2/18/16.
 */
'use strict';
/*
 var x =10, y = 9, i = 1;
 if (x > y) {
 let gamma = 12.7 + y;
 i = gamma * x;
 console.log(i);
 }

 const USER_SETTINGS = { size: 1024 };
 USER_SETTINGS.size = 1;
 console.log(USER_SETTINGS); // { size: 1 }
 */
/*

 let customer = { name: 'John' };
 let message = `Hello, ${customer.name}! How are you`;
 console.log(message);*/
/*

let obj = { a: 1, b: 2, c: 3 };

for (let value of Object.keys(obj)) {
//for (var [key, value] of obj) {
    console.log(value);
}
*/


let obj = [1,2,3];

for (var [key,value] in obj) {
//for (var [key, value] of obj) {
    console.log(value);
}



