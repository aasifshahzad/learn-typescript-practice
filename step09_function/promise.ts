function delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
//Using `then`, `catch`, and `finally`

delay(1000)
.then(() => {
    console.log('The delay is over');
})
.catch((error) => {
    console.error('Something went wrong:', error);
})
.finally(() => {
    console.log('This is always executed');

})


// //Using `async/await`:  

// try {
//     await delay(1000);
//     console.log("Await! he delay is over");
    
// } catch (error) {
//     console.error("Something went wrong");
// } finally {
//     console.log('Await: This is always executed');
// }

/* 

*/

// setTimeout(function() {
//     console.log('I am an asynchronous message'); //execute later
// }, 0);

// console.log('I am a synchronous message'); // execute first


//Asynchronous code is always executed after the main thread

setTimeout(function() {
    console.log('I am an asynchronous message');
}); // You can omit the 0

console.log('Test 1');

for (let i = 0; i < 10000; ++i) {
    doSomeStuff();
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
    return 1 + 1;
}


//Asynchronous code using setInterval

let counter = 0;

let timer = setInterval(function() {
    console.log('I am an asynchronous message');

    counter += 1;

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

console.log('I am a synchronous message');


//let fs = require('fs');
import fs from 'fs-extra' //npm i --save-dev @types/fs-extra

fs.readFile('test.txt', 'utf8', function(error: any, data : any) {
    if (error) {
         throw error;
    }

    console.log("Asynchronous message. Content of test.txt:", data);
});

console.log('Synchronous message');