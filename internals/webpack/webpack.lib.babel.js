// Important modules this config uses
const path = require('path');
// const ExportExtensionsWebpackPlugin = require('babel-plugin-transform-export-extensions');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'lib'),
  ],

  plugins: [],

  externals : {
    React: 'React'
  },

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: 'lib.js',
    libraryTarget: 'umd',
    library: 'ikabo-mui',
  }
});
