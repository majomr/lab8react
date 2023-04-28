const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./js/entrada/index.js',
  },
  output: {
    path: "C:/Users/mjmre/OneDrive/Documents/UVG 2023/Sistemas y tec web/lab8/dist-wp"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '.',
              publicPath: '.',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
       },
      }
    ],
  },
  
  plugins: [ 
    new HtmlWebpackPlugin({
      template: './js/entrada/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    

    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
  
};