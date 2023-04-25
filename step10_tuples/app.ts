import { type } from "os";

var tuple : [string,number] =  ["Asif", 48];
console.log(tuple);

var firstElement = tuple[0];
console.log(firstElement);

var secondElement = tuple[1];
console.log(secondElement);

//create a tuple using JavaScript's array syntax
const httpResponse = ["{OK}", 200];
console.log("Java Script Declaration:", httpResponse);

//create a tuple using Typescript syntax
const passingResponse: [string, number] =  ["",20]

if (passingResponse[1] === 200) {
    //const localInfo = JSON.parse(passingResponse[0]);
    const localInfo = "Responding"
    console.log(localInfo);
  } else {
    console.log("No Response from user");
  }

  //passingResponse[2]; // it will throw error due to undeclaired index

  type StaffAccount = [number, string, string, string?]

  const staff : StaffAccount[] = [
    [1,"asif", "asif@staff.com"],
    // ["asif", 1 ,"asif@staff.com","supervisor"], // Error; sequence disturbed
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
  ]

//SPREAD OPERATOR
// to indicate that it can have any length and the extra indexes will be of a particular type

//type staffIssuedCards = [StaffAccount, ...number[], ...string[]]
// A rest element type must be an array type
//A rest element cannot follow another rest element.

type Point3D = [number, number, number];

const draw = (...point3D: Point3D) => {
  console.log(point3D);
};

const xyzCoordinate: Point3D = [10, 20, 10];

draw(10, 20, 10);
draw(xyzCoordinate[0], xyzCoordinate[1], xyzCoordinate[2]);
draw(...xyzCoordinate);

type staffIssuedCards = [StaffAccount, ...number[]]
const cards : staffIssuedCards[] = [
  [staff[0], 126,255],
  [staff[1], 568],
  //[staff[2], 126,255,558,'id card'],//Error spread operator only allow numbers as declaired above
  [staff[5], 568,156,866.988],
]
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]); //[ undefined, 568, 156, 866.988 ]



type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];

console.log(monthOnePayments);
console.log(monthTwoPayments);
console.log(monthThreePayments);

//Optional Tuple Elements

type Point = [number, number?, number?];

const x: Point = [10];
const xy: Point = [10, 20];
const xyz: Point = [10, 20, 10];

console.log(x.length);
console.log(xy.length);
console.log(xyz.length);


// function calculatEmployeeSalary (id:number, ...arg:[...number[]]){
  
//   return number;
// }

// function signature // function are not declaired yet
declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;
declare function example(args_0: string, args_1: boolean, args_2: number): void;
declare function example(...args: [string, boolean, number]): void;

// calculatePayForEmployee(staff[0][0], payStubs[0][1]);
// calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);


//Reference
//https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions