var root = 'https://raw.githubusercontent.com/Strider-CD/ecosystem-index/master'

module.exports = {
  fetchPlugins: require('./fetch_plugins')(root),
  fetchPlugin: require('./fetch_plugin')(root)
}
