const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.js',  // ? 入口文件配置，也可以是个对象
  output: {                 // ? 打包输出配置
    filename: 'bundle.js',  // ? 输出文件名
    path: path.resolve(__dirname, 'dist') // ? 输出文件路径
  },
  mode: 'development',  // ? 打包模式
  plugins: [
    new HtmlWebpackPlugin({ // ? 会在打包结束后，自动生成一个 html 文件，将打包后的 js 自动引入到 html 中
      template: './src/index.html'  // ? html 文件模版
    }),
    new CleanWebpackPlugin()  // ? 打包前删除 dist 目录下的所有文件
  ]
}