const { error } = require('console')
const fs=require('fs')
// const os=require('os')

//read and write file synchronously
// let writedata=fs.writeFileSync('./writefile1.txt',"Hello Files");
// let readdata=fs.readFileSync('./writefile1.txt',"utf8");


// console.log(readdata);

// fs.appendFileSync('./writefile1.txt'," ,How are you!")


//read and write file asynchronously

// fs.writeFile('./writefile2.txt',"Good Afternoon Everyone",(error,result)=>{
//     console.log("File created successfully!"+result);
// })
// fs.readFile('./writefile2.txt',"utf8",(error,result)=>{
//      console.log("File read successfully:"+result);
//     //  console.log(error.message);
//     fs.appendFile('./writefile2.txt'," I hope you understood everything",()=>{});
// })

//unlink : to delete file
// fs.unlink('./writefile2.txt',(error,result)=>{
//     console.log("file deleted successfully")
// });

//mkdir():to create new directory (folder)

// fs.mkdir("./newdir1",(error,result)=>{
//     console.log("New directory created successfully");
// })

//one way to delete directory
// fs.rmdir('./newdir1',(error,res)=>{
//     console.log("Dir deleted successfully!");
// });

//second way to delete directory
fs.rmdir('./newdir1',()=>{}) 

fs.mkdir("./newdir2",(error,result)=>{
    fs.writeFile('./newdir2/writefile1.txt',"Hello Guys",(error,result)=>{
        console.log("File create");
    });
});

