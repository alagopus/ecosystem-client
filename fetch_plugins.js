var Promise = require('bluebird')
var get = require('./get')
var _ = require('lodash')
var yaml = require('js-yaml')

module.exports = function(root) {
  var url = root+'/stable.yml'
  return function() {
    return new Promise(function(resolve, reject){
      get(url, function(err, res, body) {
        if (err) reject(err);
        var data = yaml.load(body);
        resolve(_.map(data, function(version, name) {
          return {
            name: name,
            version: version
          }
        }));
      });
    })
  }
}
