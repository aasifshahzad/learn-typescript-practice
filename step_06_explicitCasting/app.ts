let myName: unknown = 'Asiof'
console.log((myName as string).length);
console.log(typeof(myName));

let x: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length

let y: unknown = 'hello';
console.log((<string>y).length);

let stringLength: number = 22 ;
let flower = (((stringLength as unknown) as string).length) ;
console.log('The length of the string is: ', flower) ;
console.log('The length of the string is: ', stringLength) ;
