var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var CleanPlugin = require('clean-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';
var OfflinePlugin = require('offline-plugin');

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

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: true, // Use generated relative paths by default
      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],

        externals: [
          'https://cdn.contentful.com/spaces/vox3jqb8t3cq/entries?content_type=user&order=fields.name%2Cfields.firstName',
          'https://cdn.contentful.com/spaces/vox3jqb8t3cq/entries?content_type=event',
          'https://fonts.googleapis.com/css?family=Roboto:400,300,500'
        ]
      }
    })
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
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
