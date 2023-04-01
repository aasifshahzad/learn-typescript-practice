// import { pi, phi, absolute } from "./maths.js";

// console.log(pi);
// const absPhi = absolute(phi);


// import { pi as π } from "./maths.js";

// console.log(π);

//Step 3c
// import inquirer from "inquirer";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

//Step 3d
import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));