/*
 * @Author: wadejs
 * @Date: 2018-12-11 16:31:20
 * @GitHub: 'https://github.com/wadejs'
 * @Blog: 'http://blog.wadejs.cn'
 * @Last Modified by: wadejs
 * @Last Modified time: 2018-12-11 16:59:50
 */
const merge = require('webpack-merge')
const mainConfig = require('./webpack.config')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(mainConfig, {
  devtool: false,
  plugins: [
    new UglifyWebpackPlugin()
  ]
})
