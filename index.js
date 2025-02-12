var express = require("express");
var path = require('path');
var fs = require('fs');
const reqFilter = require('./middleware')
var app = express();


app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')))

// app.get('', (req, res) => {
//     res.render('home', {name: 'Suleman'});
// });


// middleware 

// app.use((req, res, next) => {
//     req.name = "Suleman";
//     console.log("The First Middleware...", req.name );
//     // return res.json({data: "First Middleware..!"});
//     next();
// });

// app.use((req, res, next) => {
//     console.log("The Second Middleware...", req.name)
//     // res.end();
//     next();
// });

// // Logging

// app.use((req, res, next) => {
//     const now = new Date();
//     fs.appendFile('Log.txt', `\n ${now.getDate()} / ${now.getMonth() + 1} / ${now.getFullYear()} :  ${req.method} : ${req.path}` , () => {
//         next();
//     });
// });

// app.use(reqFilter);


// app.get('', (req, res) => {
    
//     // console.log("Routing handler function...",  req.name )

//     let Employee = {
//         name: 'Ali',
//         age: 21,
//         friend: 'Muzamil',
//         hobbies: ['Reading', 'Driving', 'Swimming', 'Sleeping']
//     }
//     res.render('home', {emp: Employee});
// });

// app.get('/about', (req, res) => {
//     res.render('about');
// } );

// app.get('/contact', (req, res) => {
//     res.render('contact');
// } );


// Routing middleware
// const router = express.Router();
// const ageFilter = require('./middleware')
// router.use(ageFilter);

// method 1
// app.get('',ageFilter, (req, res) => {
    
//     // console.log("Routing handler function...",  req.name )

//     let Employee = {
//         name: 'Ali',
//         age: 21,
//         friend: 'Muzamil',
//         hobbies: ['Reading', 'Driving', 'Swimming', 'Sleeping']
//     }
//     res.render('home', {emp: Employee});
// });

// // method 2

// router.get('/about', (req, res) => {
//     res.render('about');
// } );

// router.get('/contact', (req, res) => {
//     res.render('contact');
// } );

// app.use('/', router); //mounting router with app (method 2)

// Error Middleware
const errorHandler = require('./middleware/errorHandler')

app.get('', (req, res) => {
    
    // console.log("Routing handler function...",  req.name )

    let Employee = {
        name: 'Ali',
        age: 21,
        friend: 'Muzamil',
        hobbies: ['Reading', 'Driving', 'Swimming', 'Sleeping']
    }
    res.render('home', {emp: Employee});
});

app.get('/about', (req, res) => {
    res.render('about');
} );

app.get('/contact', (req, res) => {
    res.render('contact');
} );

app.get('*', (req, res, next) => {
    const error = new Error("Some went Wrong...!");
    error.statusCode = 404;
    error.status = "Failed";
    next(error);
} );

app.use(errorHandler);

app.listen(3000);


// var public = path.join(__dirname, 'public');
// app.use(express.static(public));

// app.get('/', (req, res) => {
//     res.sendFile(`${public}/index.html`);
// });

// app.get('/about', (req, res) => {
//     res.sendFile(`${public}/about.html`);
// });

// app.get('/*', (req, res) => {
//     res.sendFile(`${public}/pagenotfound.html`);
// });

// app.get('/', (req, res) => {

//     res.send([
//         {
//             name:"Suleman", 
//             age : 21,
//             height : 5.10
//         },
//         {
//             name:"Muzamil", 
//             age : 20,
//             height : 5.4
//         },
//         {
//             name:"Aqib", 
//             age : 22,
//             height : 5.11
//         }
//     ]);

//     // res.send({
//     //     name:"Suleman", 
//     //     age : 21,
//     //     height : 5.10
//     // });

//     // res.send(`
//     //     <h1>Welcome to HomePage...! </h1>
//     //     <a href='/about'> Go To About Page...!</a>
//     //     `);
// });

// app.get('/about', (req, res) => {


//     const name = req.query.name;
//     if (!name) {
//         res.send(`
//             <h1>Welcome to About Page...! </h1>
//         <input type='text' placeholder='Enter Your Name'  ><br></br>
        
//         `);
//     } else {
//         res.send(`
//             <h1>Welcome to About Page...! </h1>
//             <input type='text' placeholder='Enter Your Name'  value=${name}><br></br>
            
//             `);
//     }

//     // res.send(`
//     //     <h1>Welcome to About Page...! </h1>
//     //     <input type='text' placeholder='Enter Your Name'  value=${req.query.name}><br>
//     //     <br>
//     //     <a href='/'> Go To Home Page...!</a>
//     //     `);
// });

// app.listen(3000);









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