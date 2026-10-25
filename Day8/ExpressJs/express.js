const fs=require('fs');
const express=require('express');
const path=require('path');
const app=express();

const imgpath= path.join(__dirname,"/public");
// console.log(imgpath);

//use middleware 
app.use(express.static(imgpath));

app.get("/",(req,res,next)=>{
    res.send("Simple get request");
});
app.get("/home",(req,res,next)=>{
    // res.send("Home get request");
    res.status(200).sendFile(__dirname+"/index.html")
});
app.get("/gallery",(req,res,next)=>{
    // res.send("Gallery get request");
    res.status(200).sendFile(__dirname+"/gallery.html")

});
app.get("/contact",(req,res,next)=>{
    // res.send("Contact get request");
    res.status(200).sendFile(__dirname+"/contact.html")

});
app.get("/service",(req,res,next)=>{
    // res.send("Service get request");
    res.status(200).sendFile(__dirname+"/service.html")

});
app.get("/about",(req,res,next)=>{
    // res.send("about get request");
    res.status(200).sendFile(__dirname+"/about.html")
});


app.listen(1234,()=>{
    console.log("Server started");
});