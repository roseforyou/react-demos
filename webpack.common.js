const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const files = fs.readdirSync(path.resolve('src'));
const entryObj = {};
const entryPath = path.resolve(__dirname, 'src');
const plugins = [];

files.forEach(fileName => {
  const propName = fileName.replace(/\.jsx?$/, '');
  const jsPath = path.resolve(entryPath, fileName);
  entryObj[propName] = jsPath;
  plugins.push(
    new HtmlWebpackPlugin({
      template: './assets/template/template.ejs',
      templateParameters: {
        propName,
      },
      chunks: ['react-vendor', propName],
      inject: 'body',
      filename: propName + '.html',
    })
  );
});

plugins.push(
  new HtmlWebpackPlugin({
    template: './assets/template/index.ejs',
    templateParameters: {
      files,
    },
    filename: 'index.html',
    inject: false,
  })
);

module.exports = {
  entry: entryObj,
  plugins: [new CleanWebpackPlugin(), ...plugins],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
};
