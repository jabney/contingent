// https://webpack.js.org/guides/author-libraries/
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // entry: './dist/index.js',
  entry: {
    'contingent': './dist/index.js',
    'contingent.min': './dist/index.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '.'),
    // filename: 'contingent.js',
    library: 'contingent',
    libraryExport: 'contingent',
    libraryTarget: 'umd'
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min.js$/
      })
    ]
  }
  // stats: { warnings: false }
};
