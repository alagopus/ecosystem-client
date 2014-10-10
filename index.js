var root = require('./root')
module.exports = {
  fetchPlugins: require('./fetch_plugins')(root),
  fetchPlugin: require('./fetch_plugin')(root)
}
