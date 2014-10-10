var Promise = require('bluebird')
var yaml = require('js-yaml')
var get = require('./get')

module.exports = function(root) {
  return function(name) {
    var url = root+'/plugins/'+name;
    return new Promise(function(resolve, reject){
      get(url, function(err, res, body) {
        if (err) return reject(err);
        if (res.statusCode === 200)
          return resolve(yaml.load(body));
        else
          return reject(new Error(body));
      })
    })
  }
}
