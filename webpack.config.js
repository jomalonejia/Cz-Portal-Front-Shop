const webpack = require('webpack');
const path = require('path');
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
          }
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
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/antd")
        ],
        loader: 'style-loader!css-loader!postcss-loader!less-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000' }
    ],
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
  },
  plugins: [new ExtractTextPlugin("style.css"),HTMLWebpackPluginConfig,new webpack.HotModuleReplacementPlugin()],
};