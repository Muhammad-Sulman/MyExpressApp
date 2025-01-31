var express = require("express");
var app = express();


app.get('/', (req, res) => {

    res.send([
        {
            name:"Suleman", 
            age : 21,
            height : 5.10
        },
        {
            name:"Muzamil", 
            age : 20,
            height : 5.4
        },
        {
            name:"Aqib", 
            age : 22,
            height : 5.11
        }
    ]);

    // res.send({
    //     name:"Suleman", 
    //     age : 21,
    //     height : 5.10
    // });

    // res.send(`
    //     <h1>Welcome to HomePage...! </h1>
    //     <a href='/about'> Go To About Page...!</a>
    //     `);
});

app.get('/about', (req, res) => {


    const name = req.query.name;
    if (!name) {
        res.send(`
            <h1>Welcome to About Page...! </h1>
        <input type='text' placeholder='Enter Your Name'  ><br></br>
        
        `);
    } else {
        res.send(`
            <h1>Welcome to About Page...! </h1>
            <input type='text' placeholder='Enter Your Name'  value=${name}><br></br>
            
            `);
    }

    // res.send(`
    //     <h1>Welcome to About Page...! </h1>
    //     <input type='text' placeholder='Enter Your Name'  value=${req.query.name}><br>
    //     <br>
    //     <a href='/'> Go To Home Page...!</a>
    //     `);
});

app.listen(3000);









// app.get('/', (req, res) => {
//     res.send("Hello World..! iam avenger");
// });

// app.get('/about', (req, res) => {
//     res.send("Hello World..! iam About Page");
// });

// app.get('/contact', (req, res) => {
//     res.send("Hello World..! iam Contact Page");
// });

// app.get('/Search', (req, res) => {
//     console.log("Data Sent By Client...: ", req.query);
//     res.send("Hello World..! iam Search: "+ req.query.name);
// });

// app.get('*', (req, res) => {
//     res.send("404 Not Found Error...!");
// });

// app.listen(3000);