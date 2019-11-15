const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin(),
    new ManifestPlugin({
      seed: {
        name: 'Vue Quiz App',
        short_name: 'Quizzy',
        start_url: 'index.html',
        display: 'standalone',
        theme_color: '#463fab',
        background_color: '#fff',
        icons: [
          {
            src:
              'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX12310738.jpg',
            type: 'image/jpg'
          }
        ]
      }
    })
  ],
  node: {
    fs: 'empty'
  }
};
