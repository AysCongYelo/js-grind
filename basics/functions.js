"use strict"
//function declaration
function sayHi() {
    console.log("Hello");
}
sayHi();

//parameters input ng function
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Ays");

//multiple parameters
function add(a, b) {
    console.log(a + b);
}
add(2, 3); //5

//return value
function sum(a, b) {
    return a + b;
}
let result = sum(2, 3);
console.log(result); //5

//return stops funstion
// function test() {
//   return 5;
//   console.log("Hi"); // will not run
// }

//no return = undefined
function sayHello(){}
console.log(sayHello()); //undefined

//default parameters
function bati(name = "Guest") {
    console.log(`Hello ${name}`);
}
bati();

//function inside function
function outer(){
    function inner() {
        console.log("Inside");
    }

    inner();
}

//local variables
function test() {
  let message = "Hello";
  console.log(message);
}

test(); // console.log(message); error

//outer variables
let userName = "Ays";

function showName() {
    console.log(userName)
}

//modifying outer variables 
let count = 0;

function increment() {
    count++;
}
increment()

//Shadowing
let message = "Global";

function test() {
    let message = "Local";
    console.log(message);
}//override yung global variable inside function

//function calls another function
function a() {
    b();
}

function b() {
    console.log("Hello");
}

a();