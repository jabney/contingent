// https://webpack.js.org/guides/author-libraries/
const path = require('path');

module.exports = {
  entry: './dist/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'contingent.js',
    library: 'contingent',
    libraryExport: 'contingent',
    libraryTarget: 'umd'
  },
  externals: {},
  // stats: { warnings: false }
};
