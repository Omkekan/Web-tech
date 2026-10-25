//datatypes in ts
//1.number

let num : number;
    num=532;
//2.String
let fname:string="Ajinkya";
//3.Boolean
let cond:boolean=true;
//4.Array
let students:string[]=["Manket","Ducket","Tuple"];
//5.Tuple:it allows us to store multiple value with diff. datatype in array
let emp:[string,number,boolean]=["Amn",101,true];
//5.enum:it allows us to create variables with constant values
enum day{sun,mon,tue,wed,thu,fri,sat}
let udata=day.sat;
//6.union : it allows to store multiple values with diff datatypes
let mix:number|string|boolean= 5242;
//7.null
let empty=null;

//8.
// any
let data:any="jkkiom";

//print
console.log("number:",num);
console.log("string:",fname);
console.log("boolean:",cond);
console.log("String:",students);
console.log("Tuple:",emp);
console.log("enum:",udata);
console.log("union",mix);
console.log("empty",empty);
console.log("any",data);

