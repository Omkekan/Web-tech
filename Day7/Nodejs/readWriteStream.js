var fs = require('fs')
var myreadStream = fs.createReadStream(__dirname + '/writefile1.txt', "utf-8");
var mywriteStream = fs.createWriteStream(__dirname + '/writefile2');
myreadStream.on("data", function (chunk) {
    console.log(chunk);
    mywriteStream.write(chunk);
});