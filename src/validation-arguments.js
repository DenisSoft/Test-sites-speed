const fs = require('fs');
const mkdirpath = require('./mkdirpath');

const pathResults = [];

const validationArguments = function (arguments) {
    if (arguments.length !==4){
        console.log("Error while entering arguments!");
    } else {
        if (fs.existsSync(arguments[2])) {
            pathResults.push(process.argv[3]);
            mkdirpath(process.argv[3])
            return process.argv[2]
        } else {
            console.log("The " + arguments[2] + " file does not exist");
        }
    }
};

module.exports = {
    validationArguments,
    pathResults
};