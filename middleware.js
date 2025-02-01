// var fs = require('fs');

// const reqFilter = (req, res, next) => {
//         const now = new Date();
//         fs.appendFile('Log.txt', `\n ${now.getDate()} / ${now.getMonth() + 1} / ${now.getFullYear()} :  ${req.method} : ${req.path}` , () => {
//             next();
//         });
//     };

//     module.exports = reqFilter;


const ageFilter = (req, res, next) => {
    let age = req.query.age;
    if (!age) {
        res.send("Plaese Enter Your age..!");
    } else if(age < 18) {
        res.send("Your are Not Allowed..!");
    }else{
        next();
    }
}

module.exports = ageFilter;