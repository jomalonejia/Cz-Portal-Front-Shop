const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader',
            options:{
              modules:true
            }
          },
          {
            loader:'postcss-loader'
          }
        ]
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
  },
  plugins: [HTMLWebpackPluginConfig,new webpack.HotModuleReplacementPlugin()],
};