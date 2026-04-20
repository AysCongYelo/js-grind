"use strict"
let user = {
    name: "Ays",
    age: 23
};

//Accessing Properties
console.log(user.name); //Dot notation

console.log(user["age"]); //Bracket notation gamitin kapag dynamic ang key
 //Add/Modify Properties
 user.age = 30; //modify
 user.isAdmin = true; //add

 console.log(user);

 //Delete Property
 delete user.age;

 console.log(user);

 //Property Names (Rules)
 let obj = {
    "likes birds": true,
    123: "number key"
 };
 console.log(obj);

//Computed Propeties
let key = "name";

let usr = {
    [key]: "John"
};
console.log(usr);

//Property Value Shorthand

let nme = "John";
let edad = 25;

let userr = {
    nme,
    edad
};
console.log(userr);

//Property Existence (in)
console.log("nme" in userr); //true

//Looping Objects
for (let key in userr) {
    console.log(key);
    console.log(userr[key]);
}

//Objects are Reference Type
let a = { name: "John"};
let b = a;

b.name = "Mike";

console.log(a.name); //Mike

//Comparing Objects 
console.log({} == {}); //false

//Constant Objects

const users = {name: "John"};
users.name = "Mike"; //allowed

console.log(users);

//Nested Objects
let usrs = {
    name: "John", 
    address: {
        city: "Manila"
    }
};

console.log(usrs.address.city);

//Arrays inside Objects
let userss = {
    name: "Ays",
    hobbies:["coding", "games"]
};

console.log(userss);