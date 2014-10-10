[![NPM](https://nodei.co/npm/strider-ecosystem-client.png)](https://nodei.co/npm/strider-ecosystem-client/)

ecosystem-client
================

HTTP client for consuming data about the Strider ecosystem as maintained in [ecosystem-index](https://github.com/Strider-CD/ecosystem-index)

## API

### fetchPlugins()

Returns a promise that resolves an array of minimal plugin objects.

```js
client.fetchPlugins().then(function(remotePlugins) {
  console.log(remotePlugins) /* =>
    [ { name: 'go-strider', version: '0.0.1' },
      { name: 'strider-bitbucket', version: '1.0.3' },
      { name: 'strider-custom', version: '0.5.3' }, 
      ... ] */
})
```

### fetchPlugin(string)

Returns a promise that resolves a plugin object with all metadata

```js
client.fetchPlugin('strider-ssh-deploy').then(function(plugin) {
  console.log(plugin) /* =>
    { description: "Plugin for Strider-CD to deploy with SSH",
      html_url: "https://github.com/Strider-CD/my-strider-plugin",
      git_url: "git://github.com/Strider-CD/my-strider-plugin.git" } */
})
```
