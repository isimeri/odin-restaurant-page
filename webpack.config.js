const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/script.js',
  mode: "development",
  devServer: {
    static: './dist',
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Output Management',
      template: "./src/index.html"
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};