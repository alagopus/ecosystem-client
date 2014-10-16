var root = require('./root')
module.exports = {
  fetchPlugins: require('./fetch_plugins')(root),
}
