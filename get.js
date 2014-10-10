var request = require('request')
module.exports = get;
function get(url, cb) {
  console.log("Performing GET "+url)
  request({
    method: 'GET',
    uri: url
  }, cb)
}
