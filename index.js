var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hello World..! iam avenger");
});

app.listen(3000);