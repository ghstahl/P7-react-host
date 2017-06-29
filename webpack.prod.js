const webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    $: 'jQuery',
    jquery: 'jQuery',
    'window.jQuery': 'jquery'
  },
  module: {
    rules: [
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.less$/i,
        loader: ExtractTextPlugin.extract(['css-loader', 'less-loader']),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'

        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true

      },
      compress: {
        screw_ie8: true,
         // remove warnings
        warnings: false,

         // Drop console statements
        drop_console: true
      },
      comments: false
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new ExtractTextPlugin('styles.css'),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
