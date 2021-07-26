const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  // target: 'es2020', // for Webpack 5+
  entry: './app/main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: DIST_DIR,
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {from: "app/*.html", to: DIST_DIR, flatten: true},
        {from: "node_modules/@dittolive/ditto/web/ditto.wasm", to: DIST_DIR},
      ],
    }),
  ],

  resolve: {
    mainFields: ['browser', 'module', 'main'], // Need to be explicit with `target != web`, see above.
  },
};
