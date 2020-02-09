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
  mode: 'production',  // ? 打包模式
  module: {
    rules: [
      // {
      //   test: /\.jpeg$/,  // ? 匹配 jpeg 文件，使用该规则进行打包
      //   use: {
      //     loader: 'file-loader', // ? file-loader 的作用就是将指定文件复制到 dist 目录中，根据规则修改文件名后将文件名返回给 js 中的变量。
      //     outputPath: 'images/',  // ? 打包路径 dist/images/
      //     name: '[name]_[hash].[ext]'  // ? 设置打包后的文件名
      //   }
      // }
      {
        test: /\.(jpeg|jpg|gif|png)$/,
        use: {
          loader: 'url-loader', // ? url-loader 可以完全替代 file-loader，还可以将图片打包成base64格式
          options: {
            name: '[name]_[hash].[ext]',  // ? 设置打包后的文件名
            outputPath: 'images/',  // ? 打包路径 dist/images/
            limit: 20480  // ? 设置 2kb 以下的文件才打包成base64格式
          }
        }
      }
    ]
  }
}