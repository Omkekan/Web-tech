const mysql=require('mysql2');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ycpdb",
});

con.connect((error)=>{
    if(error) throw error

        console.log("Database connection done");
    
});

module.exports =con;