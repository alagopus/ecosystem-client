[![NPM](https://nodei.co/npm/strider-ecosystem-client.png)](https://nodei.co/npm/strider-ecosystem-client/)

ecosystem-client
================

HTTP client for consuming data about the Strider ecosystem

## API

### fetchPlugins()

Returns a promise that resolves an array of plugin objects.

```js
client.fetchPlugins().then(function(remotePlugins) {
  console.log(remotePlugins) /* =>
    [ { name: 'go-strider', version: '0.0.1' },
      { name: 'strider-bitbucket', version: '1.0.3' },
      { name: 'strider-custom', version: '0.5.3' }, 
      ... ] */
})
```
