const lineReader = require('line-reader');
const checkUrl = require('./check-url');
const fs = require('fs');

let indexCurrentURL = 1;

const readFile = function (pathUrlsFile) {
    lineReader.eachLine(pathUrlsFile, { encoding: 'utf8'}, function(line, last, cb) {
        checkUrl(line, indexCurrentURL++, cb);
    });
};

module.exports = readFile;