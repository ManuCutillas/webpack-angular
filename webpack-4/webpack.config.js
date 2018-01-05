const path = require('path');
const webpack = require('webpack');
const rxPaths = require('rxjs/_esm5/path-mapping');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: rxPaths(),
  },
  plugins: [
    // Ignore `Critical dependency: the request of a dependency is an expression` warnings.
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)esm5/,
      __dirname
    ),
    // Create a vendor chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: (module) => module.resource && module.resource.startsWith(path.resolve(__dirname, 'node_modules'))
    }),
  ],
  module: {
    rules: [
      { test: path.resolve(__dirname, 'node_modules/rxjs'), sideEffects: false },
      { test: path.resolve(__dirname, 'node_modules/@angular/common'), sideEffects: false },
      { test: path.resolve(__dirname, 'node_modules/@angular/compiler'), sideEffects: false },
      { test: path.resolve(__dirname, 'node_modules/@angular/core'), sideEffects: false },
      { test: path.resolve(__dirname, 'node_modules/@angular/platform-browser'), sideEffects: false },
      { test: path.resolve(__dirname, 'node_modules/@angular/platform-browser-dynamic'), sideEffects: false },
    ]
  },
};
