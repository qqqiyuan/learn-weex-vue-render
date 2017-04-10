var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    index:'./src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'index.min.js'
  },

  module: {
    loaders: [
      {
        test: /\.(less|css)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }, 
      {
        test: /\.(js|jsx)$/, 
        loader: 'babel-loader'
      }, 
      {
        test: /\.vue$/, 
        loader: 'vue-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css']
  },

  plugins: [
    // compress
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),

    // auto-html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './tmpl.html',
      inject: true
    }),

    // hot-replace
    new webpack.HotModuleReplacementPlugin()

  ],

  devtool: "source-map",

  devServer: {
    host: '0.0.0.0',
    port: 3333,
    inline: true,
    proxy: {
      // '/path': {
        // target: 'http://192.168.0.124:9999'
      // }
    }
  }
};