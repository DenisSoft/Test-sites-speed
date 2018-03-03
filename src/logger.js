const fs = require('fs');
const { pathResults } = require('./validation-arguments');

const logger = function (message) {
    console.log(message);
    const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';
    fs.appendFileSync(pathResults + '/message.txt', `${newLineChar}${message}`);
}

module.exports = logger;