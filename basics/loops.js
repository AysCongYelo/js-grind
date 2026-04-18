"use strict"
//1. while loop
let i = 0;

while (i < 5) {
    console.log(i);
    i++; //postfix 0 muna hanggang masatisfy yung condition
}
//kapag walagn pagbabago sa condition infinite loop siya hanggang true siya
//2. do...while loop
 let j = 0;

 do {
    console.log(j);
    j++;
 } while (j < 3) //runs atleast once, kahit false ang condition

//for loop (most used)
for (let k = 0; k < 5; k++) {
    console.log(k);
}
//parts of for loop
//let k = 0 -> start
// k < 5 -> condition
//k++ -> step

//Skipping parts

let a = 0;

for (; a <3; ) {
    console.log(a);
    a++;
}

//inline variable
for (let b = 0; b < 3; b++) {
    console.log(b);
}

//breaking the loop (break)
for (let c = 0; c < 10; c++) {
    if (c === 5) break;
    console.log(c);
}// stop loop bago mag 5

//continue (skip iteration)
for (let d = 0; d < 5; d++ ) {
    if (d === 2) continue;
    console.log(d);
}// skip yung 2

//labels 
outer:
for (let y = 0; y < 3; y++) {
    for ( let z = 0; z < 3; z++) {
        if (y === 1 && z === 1 ) break outer;
        console.log(y, z)
    }
}

//even numbers example
for ( let v = 0; v <= 10; v++) {
    if (v % 2 === 0) {
        console.log(v)
    }
}