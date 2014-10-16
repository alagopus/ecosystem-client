var Promise = require('bluebird')
var get = require('./get')
var yaml = require('js-yaml')

module.exports = function(root) {
  var url = root+'/plugins.yml'
  return function() {
    return new Promise(function(resolve, reject){
      get(url, function(err, res, body) {
        if (err) reject(err);
        resolve(yaml.load(body));
      });
    })
  }
}
