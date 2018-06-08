const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (filename = '') {
  return path.join(__dirname, filename)
}

const config = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: './dist/example.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve('example'),
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [resolve('src'), resolve('example')]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: 'index.html'
    })
  ]
}
module.exports = config
