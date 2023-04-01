"use strict";
let fname = 'Asif';
console.log(`Hello ${fname} Iam at step 0 of TS learning.`);
//Json object
// JSON object
const detail = { "name": "Vipin", "age": 21 };
// accessing JSON object
console.log(detail.name); // Vipin
console.log(detail.age); // Vipin
// Syntax error
//  lett message = "Hello World";//syntax error
// console.log(message);
//Type error
//let message = "Hello World";
//console.loger(message);
//Assignabality error
let message = "Hello World";
//message = 6;//Type 'number' is not assignable to type 'string'.
console.log(message);
//STEP 01
//strongly typed syntax
let a = "Pakistan";
a = "USA";
let b = 9;
let c = true;
//type inference
let e = "USA";
let f = 10.9;
f = 22;
let g = false;
//STEP 02
//use const where variable values do not change
const h = 5;
const i = 33;
const j = "best";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (g == false) {
    var zNumber = 4;
    console.log(zNumber);
    //use z
}
else {
    var zString = "string";
    console.log(zString);
    //use z
}
//console.log("let: " + zNumber);// Error: z is not defined in this scope ReferenceError: z is not defined
