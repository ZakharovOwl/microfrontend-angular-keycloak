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


// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
//
// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(path.join(__dirname, "../../tsconfig.json"), [
//   /* mapped paths to share */
// ]);
//
// module.exports = {
//   output: {
//     uniqueName: "log-analyzer",
//   },
//
//   plugins: [
//     new ModuleFederationPlugin({
//       shared: {
//         "@angular/core": { singleton: true, strictVersion: true },
//         "@angular/common": { singleton: true, strictVersion: true },
//         "@angular/router": { singleton: true, strictVersion: true },
//         ...sharedMappings.getDescriptors(),
//       },
//     }),
//     sharedMappings.getPlugin(),
//   ],
// };
