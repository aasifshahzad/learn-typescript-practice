"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array1 = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax
let array2 = [1, 2, 3]; //alternative correct syntax
let array3 = []; //correct syntax to define an empty array
//let array4: number[] = new number[2];//error
// Array methods
//1.  indexOf()
var array6 = ['a', 'b', 'e', 'c', 'd', 'e', 'f'];
console.log(array6.indexOf('d')); // 3
console.log(array6.indexOf('i')); //-1 does not exist
//2. lastIndexOf()
console.log(array6.lastIndexOf('f')); // 6
console.log(array3.lastIndexOf(5)); //-1 empty array
//3. concat()
let concatArray = array6.concat(array6);
console.log(concatArray);
//4. join() joins all elements of the array into a string with a given operator.
var result = array6.join('*');
console.log(result);
//5. push() add element to the end of  array
let array5 = [];
console.log(array5);
array5.push(1, 2, 3, 4); //dynamically adding
console.log(array5);
array5.push(5, 6); //dynamically adding
console.log(array5);
//6. pop()  pops/removes the last element from an array.
const poped_element = array5.pop();
console.log(array5);
console.log(poped_element);
//7. reverse()
array5.reverse();
console.log(array5);
//8. shift() removes the first element from an array and return that element also.
const shifted_element = array5.shift();
console.log(array5);
console.log(shifted_element);
console.log(array5);
//9. unshift() adds an element at first index and returns a new array
array5.unshift(8);
console.log('Unshifted "8" in the array', array5);
//10.   slice() cuts an array, in whichever manner we want and returns the trimmed array and It excludes the last index from an argument.
console.log("Sliced part of array5: ", array5.slice(0, 3));
//11. splice()
/*This method can be used for multiple purposes. For,
1. Add an element to an array
2. Replace specific elements within an array
3. Remove specific elements from an array
array.splice(index, number of elements to be removed, element1,..,elementN)
 */
var array6 = ['a', 'b', 'c', 'd', 'e', 'f'];
array6.splice(3, 0, '5');
console.log("Adding '5' in array6: ", array6);
array6.splice(4, 1, '5');
console.log("Replacing '5' in array6: ", array6);
array6.splice(3, 2);
console.log("Reemoving forth and fifth element in array6: ", array6);
//toString() converts an array to a comma-separated string.
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("convert array to a comma-separated string: ", numberArray.toString());
//13. filter()  //array.filter(callback)
/*a.    finding even numbers from an array
  b.    inding common items from two arrays
  c.    getting a distinct array. */
let stringArray1 = ['This', 'is', 'a', 'book', 'of', 'Geography'];
let stringArray2 = ['It', 'is', 'a', 'great', 'book', 'i', 'have', 'read'];
let result1 = stringArray1.filter(f => stringArray2.indexOf(f) !== -1);
console.log("Common element in both array: ", result1);
console.log('Array 6: ', array6);
let distinctArray = array6.filter((item, index) => array6.indexOf(item) === index);
console.log('Duplicated element Removed: ', distinctArray);
//14. map()  creates a new array with the results of calling a provided function on every element in this array
let number = [1.3, 2.9, 3.6, 4.8, 5.7];
let result3 = number.map(Math.cos);
console.log('number array: ', number);
console.log('Mapped function cos: ', result3);
//15. every() tests whether all the elements in an array pass the test implemented by the provided function.
function isEvenNumber(item) {
    item / 2 == 0;
}
console.log('Checking evry number if it is even.: ', array6.every(isEvenNumber));
//16.   reduceRight() works right to left
console.log(number); //[ 1.3, 2.9, 3.6, 4.8, 5.7 ]
let result4 = number.reduceRight(function (a, b) { return a - b; });
console.log(result4); //-6.8999999999999995
//17. reduce() //works left to right
let result5 = number.reduce(function (a, b) { return a + b; });
console.log(result5); //18.3
//18. some() To know whether at least a single item from an array is fulfilling a given condition or not
console.log("if any of element is odd: ", number.some(item => item % 2 !== 0));
//19. sort()
console.log("sorted array: ", array6.sort());
console.log("sorted array: ", number.sort());
//20.   fill()  It can add new elements to specific(multiple) positions
// array.fill(value, start_index, end_index)
