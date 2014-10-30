var root = require('./root')
var needle = require('needle')
module.exports = get;
function get(url, cb) {
  console.log("GET "+url.replace(root, '[ecosystem]'))
  needle.get(url, cb)
}
