var root = require('./root')
var request = require('request')
module.exports = get;
function get(url, cb) {
  console.log("GET "+url.replace(root, '[ecosystem]'))
  request({
    method: 'GET',
    uri: url
  }, cb)
}
