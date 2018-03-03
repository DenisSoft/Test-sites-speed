const { validationArguments } = require('./validation-arguments');
const readFile = require('./read-file');

Promise.resolve(process.argv)
    .then(validationArguments)
    .then(readFile)
    .catch(function(err) {
        console.error(err);
    });






