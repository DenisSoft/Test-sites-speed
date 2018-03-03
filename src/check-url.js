const https = require ('https');
const { KEY, STRATEGY } = require('./constants');
const logger = require('./logger');

const checkUrl = function(testUrl, index, cb) {
    let response = {
        id: index,
        status : 'ERROR',
        score : 0,
        url : testUrl,
    };

    https.get ({
        host: 'www.googleapis.com',
        path: '/pagespeedonline/v4/runPagespeed?url='+encodeURIComponent(response.url)+
        '&key='+KEY+'&strategy='+STRATEGY
    }, (res) => {
        response.status = res.statusCode === 200 ? 'OK' : 'ERROR: ' +res.statusCode;
        let rawData = '';
        let message = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            try {
                if (response.status === 'OK'){
                    let parsedData = JSON.parse(rawData);
                    response.score = parsedData.ruleGroups.SPEED.score;
                }
                message = response.id +
                    '. Date: ' + new Date().toISOString() +
                    '. Status: ' + response.status +
                    ', URL: ' + response.url +
                    ', Score: ' + response.score;
            } catch (e) {
                message = e.message;
            }
            finally {
                logger(message);
                cb();
            }
        });
    }). on ('error', function (e) {
        logger(е);
    });
};

const readFile = function (pathUrlsFile) {
    lineReader.eachLine(pathUrlsFile, { encoding: 'utf8'}, function(line, last, cb) {
        checkUrl(line, indexCurrentURL++, cb);
    });
};

module.exports = checkUrl;