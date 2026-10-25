//Path Module
const path=require('path');
//OS Module
const os=require('os');

//Path methods
// console.log(__dirname);
// console.log(__filename)
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("../"+__filename))
// console.log(path.join(__dirname,"../myfiles.js"))
console.log("=======================")

//OS method
console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.cpus());