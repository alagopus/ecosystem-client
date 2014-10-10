var root = 'https://raw.githubusercontent.com/Strider-CD/ecosystem-index/master'

module.exports = {
  fetchPlugins: require('./plugins')(root)
}

