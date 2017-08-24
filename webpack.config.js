const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
          },
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',

          // Could also be write as follow:
          // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        }),
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
  },
  plugins: [new ExtractTextPlugin("style.css"),HTMLWebpackPluginConfig,new webpack.HotModuleReplacementPlugin()],
};