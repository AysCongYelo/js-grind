"use strict";
//Primitive Data Types
//1. Number
let wholeNumber = 123;
let decimalNumber = 123.4;

console.log(wholeNumber);
console.log(decimalNumber);
// Special Values
console.log(1/0) //Infinity
console.log(-1/0) // -Infinity
console.log("abc"/2) //NaN

//2. BigInt
let bigNumber = 1234567890123456789n;

console.log(bigNumber);

//3. String 
let myName = "Ace";
let greetings = 'Hello';
let message = `Hi ${myName}`; // variable sa loob ng strings

console.log(myName);
console.log(greetings);
console.log(message);

//4. Boolean
let isOnline = true;
let isTall = false;

console.log(isOnline);
console.log(isTall);

//5. Null
let value = null;

console.log(value);

//6. Undefined 
let age;

console.log(age);

//7. Symbol
let id = Symbol("id");

console.log(id);

//Object - only non-primitive

let user = {
    name: "Ace",
    age: 23
}

console.log(user);

//type of Operator
console.log(typeof 123);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // "object"
console.log(typeof NaN); // "number"

//Dynamic Typing
let x = 10;
x = "hello";

console.log(x)

//Quotes in Strings
let a ="Hello";
let b = 'Hello';
let c = `Hello`;

console.log(a);
console.log(b);
console.log(c);

