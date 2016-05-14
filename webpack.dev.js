var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var CleanPlugin = require('clean-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './app',

  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js',
    // chunkFilename: '[name]-[chunkhash].js',
    chunkFilename: '[name].chunk.js',
    publicPath: ''
  },
  
  debug:   !production,
  devtool: production ? false : 'eval',

  // add this handful of plugins that optimize the build
  // when we're in production
  plugins: [
    new CleanPlugin('public'),
    new TransferWebpackPlugin([
      {from: 'www'},
    ]),
    new ExtractTextPlugin('styles.css'),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname + '/app',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: __dirname + '/app/styles',
        // loader: 'style-loader!css-loader!postcss-loader'
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer({ browsers: ['last 4 versions'] }),
      require('postcss-nested')
    ]
  }
}