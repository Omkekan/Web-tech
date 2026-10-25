const chalk=require('chalk');

let emsg=chalk.bold.red.underline;
let smsg=chalk.bold.green.underline;

console.log(chalk.red("Hello Friends"));
console.log(chalk.yellow("Hello Friends"));
console.log(chalk.green.bgMagenta("Hello Friends"));
console.log(chalk.bold.italic.underline("Hello Friends"));

//use of chalk variable 
console.log(smsg("You did it "))
console.log(emsg("You failed"))
