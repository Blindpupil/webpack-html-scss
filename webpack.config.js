const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './public'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [ 'file-loader' ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [ 'file-loader' ]
    }
  ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};