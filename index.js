var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hello World..! iam avenger");
});

app.get('/about', (req, res) => {
    res.send("Hello World..! iam About Page");
});

app.get('/contact', (req, res) => {
    res.send("Hello World..! iam Contact Page");
});

app.get('/Search', (req, res) => {
    console.log("Data Sent By Client...: ", req.query);
    res.send("Hello World..! iam Search: "+ req.query.name);
});

app.get('*', (req, res) => {
    res.send("404 Not Found Error...!");
});

app.listen(3000);