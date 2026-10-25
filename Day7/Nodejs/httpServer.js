require('dotenv').config();
const http=require('http')
const fs=require('fs');

const port=process.env.PORT;
const host=process.env.HOST;

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        // res.write("this is a simple request");
        // res.end();
        res.writeHead(200,{"content-type":"text/html"});
        let myreader=fs.createReadStream(__dirname+'/index.html',"utf-8");
        myreader.pipe(res);
    }else if(req.url=="/home"){
        // res.write("this is a home request");
        // res.end();
        res.writeHead(200,{"content-type":"text/html"});
        let myreader=fs.createReadStream(__dirname+'/index.html',"utf-8");
        myreader.pipe(res);
    }
    else if(req.url=="/about"){
        // res.write("this is a about request");
        // res.end();
        res.writeHead(200,{"content-type":"text/html"});
        let myreader=fs.createReadStream(__dirname+'/about.html',"utf-8");
        myreader.pipe(res);
    }
    else if(req.url=="/contact"){
        // res.write("this is a contact request");
        // res.end();
        res.writeHead(200,{"content-type":"text/html"});
        let myreader=fs.createReadStream(__dirname+'/contact.html',"utf-8");
        myreader.pipe(res);
    }
    else if(req.url=="/service"){
        // res.write("this is a service request");
        // res.end();
        res.writeHead(200,{"content-type":"text/html"});
        let myreader=fs.createReadStream(__dirname+'/service.html',"utf-8");
        myreader.pipe(res);
    }
    else if(req.url=="/gallery"){
        // res.write("this is a gallery request");
        // res.end();.
        res.writeHead(200,{"content-type":"text/html"});
        let myreader=fs.createReadStream(__dirname+'/gallery.html',"utf-8");
        myreader.pipe(res);
    }
});

server.listen(port,()=>{
    console.log(`server get started on ${host}:${port}`);
})