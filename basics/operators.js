"use strict"
//1. Arithmetic Operators
let addition = 1 + 2;
let subtraction = 1 - 2;
let multiplication = 1 * 2;
let division = 1 / 2;
let remainder = 1 % 2;
let exponentiation = 1 ** 2; 

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(remainder);
console.log(exponentiation); 

//String Concatenation
let str = "Hello" + " Ays";

console.log(str);
console.log("1" + 2); // if one is string result become string
console.log(2 + "1");

//Numeric Conversion
console.log("6" / "2");

//2. Unary Operators
let x = "1";
x = -x; // gawing negative sign at convert sa number kahit string pa siya
x = +x; // convert lang sa string 

console.log(x)

//3. Assignment Operators
let a, b, c, d;
a = b = c = d =5; //assign
a += 2; //add and assign
b -= 2; // subtract and assign
c *= 2; // multiply and assign
d /= 2; //divide and assign

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//4. Increment/Decrement
let e = 5;

let f = e++; //Postfix

console.log(f);5;
console.log(e);

e = 6;

let g = ++e; //Prefix

console.log(g);
console.log(e);

//5. Comparison Operators
console.log(1 > 0); //greater than
console.log(1 < 0); //less than
console.log(1 >= 0); //greater than or equal
console.log(1 <= 0); // less than or equal
console.log(1 == "1"); //loose equality
console.log(1 != "1"); //loose inequality
console.log(1 === "1"); //strict equality
console.log(1 !== "1"); //stict inequality

//Comparison with Different Types 
console.log("2" > 1); //string maconvert sa number kaya true

//Null and Undefined Comparison
console.log(null == undefined); //true
console.log(null === undefined); //false

//6. Logical Operators
console.log(true || false); //true   OR  
console.log(true && false); // false AND
console.log(!true); // flase NOT

//Short-Circuit Behavior
console.log(true || "hello"); //true
console.log(false || "hello"); //"hello"
//returns first na truthy value

//7. Nullish Coalescing
let usr;
console.log(usr ?? "Guest"); //Guest ibabalik niya lang yung may null or undefined na value

let nme = "Ays";
console.log(nme ?? "Guest");// Ays kase may value na

let score = 0;
console.log(score || "No Score"); // lahat ng falsy
console.log(score ?? "No Score"); //null at undefined lang

//8. Operator Precedence

let rslt = 2 + 3 * 4; // 14 PEMDAS
console.log(rslt);

//9. Chaining Assignments
let j, k, l;
j = k = l = 5; // all become 5

//10. Comma Operator
let h = (1 + 2, 3 + 4);
console.log(h) // 7 last value irereturn