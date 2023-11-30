"use strict" // treat all js code as newer version

console.log(3 + 3);

let name = "Satoru Gojo"
let age = 21
let isLoggedIn = false
let state = null

/* Data Types
Primitive--------
 number => 2 to power 53
 bigint
 string => ""
 boolean => true/false
 null => standalone value
 undefined => 
 symbol => unique
 Reference(Non-primitive)------
 objects
 Arrays
 Functions
 */
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
// learn type of operator from ecma script 