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
app.get('/product', (req, res, next) => {

    con.query("SELECT * FROM products", (error, result) => {

        if (error) throw error;

        res.send(result);
    });

});

// parameterized routing
app.get('/product/:id', (req, res, next) => {

    // res.send(`Simple get request for single user with id: ${req.params.id}`);
    con.query(`SELECT * FROM products WHERE pid=${req.params.id}`, (error, result) => {
        if (error) throw error;

        res.send(result);
    })

});

// delete request
app.delete('/product/:id', (req, res, next) => {

    // res.send("Simple delete request for user");
    con.query(`delete from products where pid=${req.params.id}`, (error, result) => {
        if (error) throw error;

        res.send(result);
    })

});

// post request
app.post('/product', (req, res, next) => {


    const { pname, pprice, pquan,pcom } = req.body;
    let insertQuery = `insert into products(pname, pprice, pquan,pcom) values(?,?,?,?)`
    con.query(insertQuery, [pname, pprice, pquan,pcom], (error, result) => {
        if (error) throw error;

        res.send(result);
    })

});

// put request
app.put('/product/:id', (req, res, next) => {

    // res.send("Simple put request for user");
    const { pname, pprice, pquan,pcom} = req.body;
    let updateQuery = `update products set pname=?,pprice=?, pquan=?, pcom=? where pid=${req.params.id}`;
    con.query(updateQuery, [pname, pprice, pquan,pcom], (error, result) => {
        if (error) throw error;

        res.send(result);
    });


});

app.listen(port, () => {

    console.log(`Server started on ${host}:${port}`);

});