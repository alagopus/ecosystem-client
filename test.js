var client = require('./')

client.fetchPlugins().then(function(plugins) {
  console.log('got '+Object.keys(plugins).length+' plugins')
}).error(function(err) {
  throw err;
}).catch(function(err) {
  throw err;
})
