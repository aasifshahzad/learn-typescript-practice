"use strict";
//Simple function
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
//console.log(add(5,9))
//Anonymous function
let myAdd1 = function (x, y) {
    return x + y;
};
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
//Lambda functions															
let myAdd4 = (a, b) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
//console.log(myAdd4(5,6));
//Function Optional Parameter
function buildNamne(fname, lname) {
    if (lname) {
        return fname + " " + lname + " is on the way to Islamabad";
    }
    else {
        return fname + " is on the way to Islamabad";
    }
}
console.log(buildNamne('Asif', "Shahzad"));
console.log(buildNamne('Asif'));
//Anonoymus function with optional types
let aFunction = function (x, y) {
    if (y) {
        return x + " " + y + " is on the way to Islamabad";
    }
    else {
        return x + " is on the way to Islamabad";
    }
};
console.log(aFunction("Bob"));
console.log(aFunction("Bob", "Joy"));
//Function Default Parameter
function buildNamne2(fname, lname) {
    if (lname) {
        return fname + " " + lname + " is on the way to Islamabad";
    }
    else {
        return fname + " is on the way to Islamabad";
    }
}
function getDay(year = new Date().getFullYear(), month) {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}
let day = getDay(2020, 10);
console.log(day); // 28
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
//https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/
//Function Rest Parameters
function getAverage(...arg) {
    var avg = arg.reduce(function (a, b) {
        return a + b;
    }, 0) / arg.length;
    return avg;
}
//console.log(getAverage(1,2,3,4,5,6,7,8,9));
// Function call
console.log("Average of the given numbers is : " +
    getAverage(10, 20, 30, 40, 50));
console.log("Average of the given numbers is : " +
    getAverage(1.5, 3.5, 5.5, 7.5, 9.5));
console.log("Average of the given numbers is : " +
    getAverage(2, 4, 6));
function getSentence(...args) {
    var words = args.join(" ");
    return words;
}
console.log("The sentence is : " +
    getSentence('I', 'am', '6', 'year', 'old', '.'));
function Job(Job_title, ...people) {
    return people.join(", ") + " are " + Job_title;
}
console.log(Job("mathematicians", "rachel", "john", "peter"));
console.log(Job("coders", "sarah", "joseph"));
