const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');

const htmlSettings = {
  inject: true,
  hash: true,
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  },
  favicon: './src/favicon.png',
  template: './src/index.html',
  filename: 'index.html'
};

module.exports = {
  context: path.join(__dirname, './'),

  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },

  optimization: {
    minimize: true
  },

  devtool: 'source-map',

  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(htmlSettings)
  ],

  resolve: {
    modules: [process.env.NODE_PATH || 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    publicPath: '/',
    port: 3000,
    hot: true,
    inline: true,
    host: '0.0.0.0',
    overlay: true,
    historyApiFallback: true,
    https: false,
    stats: 'minimal'
  }
};
