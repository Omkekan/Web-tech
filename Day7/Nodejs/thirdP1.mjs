import chalk from "chalk";
import validator from "validator";

const errormsg=chalk.bold.italic.red;
const succesmsg=chalk.bold.italic.green;

console.log(errormsg("You failed to do it"));
console.log(succesmsg("You do it"));

let msg="";
console.log(validator.isEmpty(msg))
let msg1="acjsofk";
console.log(validator.isEmpty(msg1))
let Email="dsfsvs";
console.log(validator.isEmail(Email));
let Email2="cad@gmail.com";
console.log(validator.isEmail(Email2));


