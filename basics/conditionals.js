"use strict"
//if...else
let age = 23;

if (age>=18) {
    console.log("Adult"); //if true
} else {
    console.log("Minor"); //if false
}

//else if (multiple conditions)
let score = 85;

if (score >= 90) { 
    console.log("Excellent");
} else if (score >=75) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}

//Boolean Conversion
//conditions are automaatically converted to boolean
if (0) {
    console.log("Will not run");
} //falsy yung value

if ("hello") {
    console.log("Will run");
} // truthy value

//Short Form (Ternary Operator)
// let result = conditon ? value1 : value2;

let edad = 20

let access = edad >= 18? "Allowed" : "Denied";
console.log(access);

//Multiple Ternary (not recommended if complex)

let resulta = edad < 18 ? "Minor":
              edad < 60 ? "Adult":
              "Senior";
              console.log(resulta);

//if with multiple conditions
if (edad >= 18 && edad <= 60) {
    console.log("Working age");
}

//Code Blocks {}
if (true) {
    console.log("Hello")
}

//Nested if
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Allowed")
    }
}

//Skipping else
if (age >= 18) {
    console.log("Adult")
} // else is optional