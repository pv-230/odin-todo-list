const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/scripts/index.js',
  output: {
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./src/'],
  },
};
