const path = require('path');

module.exports = {
  entry:  './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
  },
};
