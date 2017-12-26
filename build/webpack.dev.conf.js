var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
// https://github.com/survivejs/webpack-merge 提供一个合并生成新对象函数
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 在浏览器不刷新的情况下，也可以看到改变的效果，如果刷新失败了，他就会自动刷新页面  
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    // 后面会有对utils的解释,这里是对单独的css文件，用相应的css加载器来解析  
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    // 通过插件修改定义的变量 
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
       // 热加载 
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
     // 当编译出现错误的时候，会跳过这部分代码  
    // new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
     // filename生成的文件名，template是模版用的文件名,https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
       // 让打包生成的html文件中css和js就默认添加到html里面，css就添加到head里面，js就添加到body里面
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
