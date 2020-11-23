const path = require('path')
const webpack = require('webpack');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
})

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'token': JSON.stringify(dotenv.parsed.token)
      }
    })
  ]
}
