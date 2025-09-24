// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  devtool: 'eval-source-map',
  devServer: {
    static: false,
    compress: true,
    port: 8080,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
    open: true,
    historyApiFallback: true, // route all 404s to /
    client: {
      overlay: true,
      logging: 'info',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
      filename: 'index.html',
      inject: 'body', // make sure <script> is injected
    }),
  ],
};
