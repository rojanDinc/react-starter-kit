const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8880,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [new webpack.NamedModulesPlugin()]
});
