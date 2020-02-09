const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.js',  // ? 入口文件配置，也可以是个对象
  output: {                 // ? 打包输出配置
    filename: 'bundle.js',  // ? 输出文件名
    path: path.resolve(__dirname, 'dist') // ? 输出文件路径
  },
  mode: 'development'  // ? 打包模式
}