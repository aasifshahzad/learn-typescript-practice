//Defining a Union Type

// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
// }
// // OK
// printId(101);
// // OK
// printId("202");
// Error
//printId({ myID: 22342 });

//let id: number | string = 121.6584655
//console.log(id.toUpperCase());
//Error
//console.log(id.toFixed(2));
//Good to go

// let id: number | string = 'one'
// console.log(id.toUpperCase());
//Error
//console.log(id.toFixed(2));
//Good to go


// Better way to code
// function printId(id: number | string) {
//     if (typeof id === "string") {
//         // In this branch, id is of type 'string'
//         console.log(id.toUpperCase());
//     } else {
//         // Here, id is of type 'number'
//         console.log(id);
//         }
// }
// printId(122)
// printId('122')

///Narrowing

function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
    return " ".repeat(padding) + input;//(parameter) padding: number
    }
    return padding + input;//(parameter) padding: string
}
console.log(padLeft(6,'asif'));


//Truthiness narrowing
// Equality narrowing