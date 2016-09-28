const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:[
    './index.js'
  ],
  output:{
    path : path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module:{
    loaders:[
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          'presets':['react','es2015','es2016']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html'
  })]

}
