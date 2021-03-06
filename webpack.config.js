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
  plugins: production ? [
    // new CleanPlugin('public'),
    new webpack.optimize.CommonsChunkPlugin({
        name:      'main', // Move dependencies to our main file
        children:  true,   // Look for common dependencies in all children,
        minChunks: 2,      // How many times a dependency must come up before being extracted
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 51200, // ~50kb
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
      }
    }),
    new ExtractTextPlugin('styles.css'),
    // This plugins defines various variables that we can set to false
    // in production to avoid code related to them from being compiled
    // in our final bundle
    new webpack.DefinePlugin({
        __SERVER__:      !production,
        __DEVELOPMENT__: !production,
        __DEVTOOLS__:    !production,
        'process.env':   {
            BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
        },
    }),
    new TransferWebpackPlugin([
      {from: 'www'},
    ]),
  ] : [
    // new CleanPlugin('public'),
    new webpack.optimize.CommonsChunkPlugin({
        name:      'main',
        children:  true,
        minChunks: 2,
    }),
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