const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');
module.exports = {
  entry: {
    'mamba': './src/index.js',
    'mamba.min':'./src/index.js'
  },
  mode:'none',
  output: {
    filename:'[name].js',
    library:'mamba',
    libraryTarget:'umd',
    libraryExport:'default',
    path: path.resolve(__dirname, './dist')
  },
  optimization:{
    minimize:true,
    minimizer:[
      new TerserPlugin({
        include:/\.min\.js$/
      })
    ]
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}