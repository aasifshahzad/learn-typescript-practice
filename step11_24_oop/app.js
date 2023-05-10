"use strict";
/*------------------------------------------------------------------ */
// Readonly property
class Greeter {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = "not ok";
        //Cannot assign to 'name' because it is a read-only property.
    }
}
const g = new Greeter();
// g.name = "also not ok";
//Cannot assign to 'name' because it is a read-only property.
/*-------------------------------------------------------------- */
// Super function
class Base {
    constructor() {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        //console.log(this.k);
        //'super' must be called before accessing 'this' in the constructor of a derived class.
        super(); // calls the parent class constructor function
        // it must be on the top in the constructor function  
        console.log(this.k);
    }
}
/*---------------------------------------------------------------------- */
//Getter/setter
class C {
    constructor() {
        this._length = 7;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
console.log(C.length);
class Sonar {
    ping() {
        console.log('ping property');
    }
    pong() {
        console.log('pong property');
    }
}
/*The topic covered some part of the following link:
    https://www.typescriptlang.org/docs/handbook/2/classes.html
*/ 
