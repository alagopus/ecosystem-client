var Promise = require('bluebird')
var request = require('request')
var _ = require('lodash')
var yaml = require('js-yaml')


module.exports = function(root) {
  var url = root+'/stable.yml'
  return function() {
    var items = []
    var cb = null;

    return new Promise(function(resolve, reject){
      cb = function (err, res, body) {
        if (err) reject(err);
        var data = yaml.load(body);
        resolve(_.map(data, function(version, name) {
          return {
            name: name,
            version: version
          }
        }));
      }
      get(url, cb);
    })
  }
}

function get(url, cb) {
  console.log("Performing GET "+url)
  request({
    method: 'GET',
    uri: url
  }, cb)
}
