"use strict"
//Accessing Elements
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);

//Modify Elements
fruits[1] = "Mango";

console.log(fruits);

//Add Elements
fruits.push("Grapes"); 
console.log(fruits); // push is maadd sa end

fruits.unshift("Pineapple");
console.log(fruits); // unshift is maadd sa start

//Remove Elements
fruits.pop();
console.log(fruits); // pop is remove yung inadd sa end

fruits.shift();
console.log(fruits); // shift is remove yung inadd sa start

//Array Length
console.log(fruits.length);

//Last Element
console.log(fruits[fruits.length - 1]);
//other way
console.log(fruits.at(-2));

//Array can store ANY type
let mixed = ["Ays", 23, true, null];

console.log(mixed);

//Looping Arrays
//for loop
for (let i = 0;i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for...of
for (let fruit of fruits) {
    console.log(fruit);
}

//Arrays are Objects
console.log(typeof fruits); // object

//Reference Behavior
let a = [1, 2];
let b = a;

b.push(3);

console.log(a);
console.log(b); // same reference sila

//Comparing Arrays
console.log([] == []); // false kase different object

//Clearing Array
fruits = [];
console.log(fruits);
//or
fruits.length = 0;
console.log(fruits);

//Multi-dimensional Array
let matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[0][1]);