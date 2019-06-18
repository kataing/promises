/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var nodeStyle = require('./callbackReview');

// This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFileAsync = function (filePath) {
  // TODO
  // return new Promise((resolve, reject) => {
  //   fs.readFile(filePath, (err, data) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(data.toString().split('\n')[0]);
  //     }
  //   })
  // });
// }
var pluckFirstLineFromFileAsync = Promise.promisify(nodeStyle.pluckFirstLineFromFile);

// This function should retrieve the status code of a GET request to `url`
// var getStatusCodeAsync = function (url) {
  // TODO
  // var options = {
  //   url: url,
  //   // headers: { 'User-Agent': 'request' },
  //   json: true
  // }
  // return new Promise((resolve, reject) => {
  //   request.get(options, (err, res, body) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(res.statusCode);
  //     }
  //   })
  // })
// };

var getStatusCodeAsync = Promise.promisify(nodeStyle.getStatusCode);

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
