require('dotenv').config();
const bodyparser = require('body-parser');
const con = require('./connection.js');
const express = require('express');
const cors=require('cors')
const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(cors());
app.use(bodyparser.urlencoded());
app.use(bodyparser.json({ extended: true }));

app.get('/', (req, res, next) => {
    res.send("Delulu:DILUSION");
});

// naming routing
app.get('/user', (req, res, next) => {

    con.query("SELECT * FROM users", (error, result) => {

        if (error) throw error;

        res.send(result);
    });

});

// parameterized routing
app.get('/user/:id', (req, res, next) => {

    // res.send(`Simple get request for single user with id: ${req.params.id}`);
    con.query(`SELECT * FROM users WHERE ID=${req.params.id}`, (error, result) => {
        if (error) throw error;

        res.send(result);
    })

});

// delete request
app.delete('/user/:id', (req, res, next) => {

    // res.send("Simple delete request for user");
    con.query(`delete from users where id=${req.params.id}`, (error, result) => {
        if (error) throw error;

        res.send(result);
    })

});

// post request
app.post('/user', (req, res, next) => {

    // res.send("Simple post request for user");
    // let name= req.body.name;
    // let post=req.body.post;
    // let salary=req.body.salary;

    const { name, post, salary } = req.body;
    let insertQuery = `insert into users(name,post,salary) values(?,?,?)`
    con.query(insertQuery, [name, post, salary], (error, result) => {
        if (error) throw error;

        res.send(result);
    })

});

// put request
app.put('/user/:id', (req, res, next) => {

    // res.send("Simple put request for user");
    const { name, post, salary } = req.body;
    let updateQuery = `update users set name=?, post=?, salary=? where id=${req.params.id}`;
    con.query(updateQuery, [name, post, salary], (error, result) => {
        if (error) throw error;

        res.send(result);
    });


});

app.listen(port, () => {

    console.log(`Server started on ${host}:${port}`);

});