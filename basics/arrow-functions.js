"use strict"
//Basic Sntax
let add = (a, b) => a + b;

console.log(add(2, 3)); // 5 

//Single Parameter
let square = x => x * x;

console.log(square(4)); // 16
//Parentheses optional if one parameter

//No Parameters
let greet = () => "Hello";

console.log(greet());

//Multiple Lines (Block Body)

let sum = (a, b ) => {
    let result = a + b;
    return result;
}
console.log(sum(6, 7));
//Need return kapag {}

//One-line (Implicit Return)
let sums = (a, b) => a + b;

console.log(sums(7, 11));
//Automatic Return

//Returning Object
let createUser = (name) => ({name: name});

console.log(createUser("Ays"));

//Arrow Function vs Regular Function
//Shorter
// let add = (a, b) => a + b;

//No own this
let user = {
    name : "Ays",
    bati() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
user.bati();