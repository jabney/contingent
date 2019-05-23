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
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
  // stats: { warnings: false }
};
