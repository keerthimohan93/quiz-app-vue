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
        description:
          'A simple quiz application having various interesting topics to choose from',
        icons: [
          {
            src:
              'https://user-images.githubusercontent.com/7110136/29002858-a09570d2-7ab4-11e7-8faa-5dd6d4458b0d.png',
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
