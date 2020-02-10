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
  ],
  module: {
    rules: [
      // {
      //   test: /\.jpeg$/,  // ? 匹配 jpeg 文件，使用该规则进行打包
      //   use: {
      //     loader: 'file-loader', // ? file-loader 的作用就是将指定文件复制到 dist 目录中，根据规则修改文件名后将文件名返回给 js 中的变量。
      //     options: {
      //       outputPath: 'images/',  // ? 打包路径 dist/images/
      //       name: '[name]_[hash].[ext]'  // ? 设置打包后的文件名
      //     }
      //   }
      // }
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,  // ? 打包字体文件
        use: {
          loader: 'file-loader', // ? file-loader 的作用就是将指定文件复制到 dist 目录中，根据规则修改文件名后将文件名返回给 js 中的变量。
          options: {
            outputPath: 'fonts/',  // ? 打包路径 dist/images/
            name: '[name]_[hash].[ext]'  // ? 设置打包后的文件名
          }
        }
      },
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // ? 将样式内联到 html 文件中
          {
            loader: 'css-loader', // ? 分析 css 文件引用关系并合并
            options: {
              // ? 当文件中有 import 等语句引入其他样式文件时，会重新调用前两个 loader 进行解析。默认配置是 0，也就是 postcss-loader 和 sass-loader 都被跳过不执行了。
              // ? 数字代表需要往前执行的 loader 数量
              importLoaders: 2,
              // ? 开启 css module，样式引用会变为 import style from './index.scss'
              // ? img.classList.add(style.img) 利用这种方式来添加类名
              // ? css 模块化的好处就是只对引入 css 的模块起作用，不会全局起作用
              // module: true   
            }
          }, 
          'sass-loader', // ? 将 scss 文件转换为 css 文件
          'postcss-loader', // ? 配置写在 postcss.config.js 文件中，postcss 能够按照规则修改所有样式文件，比如：autoprefixer 添加厂商前缀
        ]
      }
    ]
  }
}