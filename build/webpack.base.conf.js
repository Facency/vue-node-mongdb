var path = require('path')
// 工具类，下面会用到 
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    // 指明入口函数 
  entry: {
    app: './src/main.js'
  },
  // 输出配置项
  output: {
    // 路径，从config/index读取的，值为：工程目录下的dist目录，需要的自定义的也可以去修改
    path: config.build.assetsRoot,
    filename: '[name].js',
    // 发布路径，这里是的值为/，正式生产环境可能是服务器上的一个路径,也可以自定义
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 配置模块如何被解析，就是import或者require的一些配置
  resolve: {
    // 当使用require或者import的时候，自动补全下面的扩展名文件的扩展名，也就是说引入的时候不需要使用扩展名
    extensions: ['.js', '.vue', '.json'],
    // 别名,在我们require的时候，可以使用这些别名，来缩短我们需要的路径的长度
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'views': resolve('src/views'),
      'components': resolve('src/components'),
      'api': resolve('src/api')
    }
  },
    // 对相应文件的编译使用什么工具的配置 
  module: {
    rules: [
      {    // loader之前的配置，会对.vue,.js的文件用eslint进行编译,include是包含的文件，exclude是排除的文件，可以使用的正则 
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      // 这里也是相应的配置，test就是匹配文件，loader是加载器，  
    // query比较特殊，当大小超过10kb的时候，会单独生成一个文件，文件名的生成规则是utils提供的方法，当小于10kb的时候，就会生成一个base64串放入js文件中  cn
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
