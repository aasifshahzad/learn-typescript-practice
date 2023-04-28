// let obj1 = {
//   name :"Asif",
//   experience: 10
// }
// console.log(obj1);
// console.log(obj1.experience);
// console.log(obj1["name"]);

// // Type Declaration
// let student : {
//     name: string,
//     age: number
// }

// student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // declaring type and values at a time
let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Type Alice

// // Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

// // Interfaces

interface IManager {
    name: string,
    subordiates?: number
}

let storeManager: IManager = {
    name: "Bilal"
}
//Structural Typing in Object Literals
// These two interfaces are completely
// transferrable in a structural type system:

interface IBall {
    diameter: number;
}

interface ISphere {
    diameter: number;
}
  
  let ball: IBall = { diameter: 10 };
  let sphere: ISphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;
  
  // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
  
  interface ITube {
    diameter: number;
    length: number;
  }
  
  let tube: ITube = { diameter: 12, length: 3 };
  
  //tube = ball;//Error
  ball = tube;
  
//   // Because a ball does not have a length, then it cannot be
//   // assigned to the tube variable. However, all of the members
//   // of Ball are inside tube, and so it can be assigned.
  
//   // TypeScript is comparing each member in the type against
//   // each other to verify their equality.

// //===================================================

// // Now lets do it Case By Case


// //Case when "FRESH"" object literal are assigned to a variable 
// //Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
// //it is an error for the object literal to specify properties that don't exist in the target type.
// //The rationale for the below two errors is that since the fresh types of the object literals are 
// //never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 

let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
									//Object literals can only have properties that exist in contextual type


//Case 2a
//myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property

//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature


//Case 3
//myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property



//=================================================


//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2,  name_person: "Tom" };
//Case 2a
//myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 


//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y;// Ok, `fullname` matched by index signature


var myType4 = { id: 2,  name: "Tom", age: 22 };

//Case 3
myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object






// var x: { foo: number };
// x = { foo: 1, baz: 2 };  // Error, excess property `baz`
// var y: { foo: number, bar?: number };
// y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`
// var a: { foo: number };
// var a1 = { foo: 1, baz: 2 };
// a = a1;//No Error
// var z: { foo: number, bar?: number };
// var z1 = { foo: 1, baz: 2 };
// z = z1;//No Error


// //Nested Objects
type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}

// //intersected types
interface IStudent {
    student_id: number;
    name: string;
  }
    
interface ITeacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = IStudent & ITeacher;
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
    
// console.log(obj1.teacher_Id);
// console.log(obj1.name);

// // Any

// let myval: any;

// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK


// //Unknown

// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK


// // Assigning a value of type unknown to variables of other types

let val: unknown;

// const val1: unknown = val; // OK
// const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// // Never

// // Function returning never must not have a reachable end point
// 
