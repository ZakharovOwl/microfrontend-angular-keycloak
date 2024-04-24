const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    //'./Component': './projects/mfe1/src/app/app.component.ts',
    // Update this whole line (both, left and right part):
    './Module': './projects/mfe1/src/app/flights/flights.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }, ['keycloak-js']),
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
//     uniqueName: 'mfe1',
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
