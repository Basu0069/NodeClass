// Task: 
// 1. Print Error and success messages with differenct styles. 
// 2.Display "Warning Low Disk Space" with yellow background and black Text. 
// 3.Make only Error red BeforeUnloadEvent, rest white ---nested styles 


import chalk from "chalk";


console.log(chalk.green("Successful"));
console.log(chalk.bgYellow.black("Warning: Low Disk Space"));
console.log(chalk.red.bold("Error: Something went wrong"));
console.log(chalk.white("Success: Operation completed"));

