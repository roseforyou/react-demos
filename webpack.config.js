const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      chunks: [propName],
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
  mode: 'development',
  entry: entryObj,
  devServer: {
    hot: true,
    watchContentBase: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
  },
  watchOptions: {
    ignored: /node_modules/,
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
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.less$/,
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
  plugins,
};
