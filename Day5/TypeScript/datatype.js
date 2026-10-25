"use strict";
//datatypes in ts
//1.number
let num;
num = 532;
//2.String
let fname = "Ajinkya";
//3.Boolean
let cond = true;
//4.Array
let students = ["Manket", "Ducket", "Tuple"];
//5.Tuple:it allows us to store multiple value with diff. datatype in array
let emp = ["Amn", 101, true];
//5.enum:it allows us to create variables with constant values
var day;
(function (day) {
    day[day["sun"] = 0] = "sun";
    day[day["mon"] = 1] = "mon";
    day[day["tue"] = 2] = "tue";
    day[day["wed"] = 3] = "wed";
    day[day["thu"] = 4] = "thu";
    day[day["fri"] = 5] = "fri";
    day[day["sat"] = 6] = "sat";
})(day || (day = {}));
let udata = day.sat;
//6.union : it allows to store multiple values with diff datatypes
let mix = 5242;
//7.null
let empty = null;
//8.
// any
let data = "jkkiom";
//print
console.log("number:", num);
console.log("string:", fname);
console.log("boolean:", cond);
console.log("String:", students);
console.log("Tuple:", emp);
console.log("enum:", udata);
console.log("union", mix);
console.log("empty", empty);
console.log("any", data);
