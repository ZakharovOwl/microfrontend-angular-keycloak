const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    //"mfe1": "http://localhost:4200/remoteEntry.js",
    // Check this line. Is port 4201 configured?

    // mfe1: 'http://localhost:4201/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
