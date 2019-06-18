/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  fs.readFile(filePath, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(err, data.toString().split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  // TODO
  var options = {
    url: url,
    // headers: { 'User-Agent': 'request' },
    json: true  // will JSON.parse(body) for us
  };
  request.get(options, (err, res, body) => {
    if (err) {
      cb(err);
    } else {
      cb(err, res.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
