'use strict'

const webpack = require('webpack')
const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = (env) => {
  return {
    context: resolve(__dirname, './app'),
    devtool: env.prod ? 'source-map' : 'eval',
    entry: {
      main: './index.js',
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'build'),
      publicPath: '/',
      pathinfo: !env.prod,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
      modules: [resolve(__dirname, './app'), 'node_modules']
    },
    bail: env.prod,
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            { loader: 'style-loader', options: { sourceMap: true } },
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          test: /\.scss/,
          use: [
            { loader: 'style-loader', options: { sourceMap: true } },
            { loader: 'css-loader', options: { sourceMap: true } },
            // { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            { loader: 'babel-loader', options: { presets: ['es2015',] }},
          ],
        },
        {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }]
        },
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        postcss: () => {
          return [
            /* eslint-disable global-require */
            require('postcss-cssnext'),
            /* eslint-enable global-require */
          ]
        },
      })
    ]
  }
}

module.exports = config
