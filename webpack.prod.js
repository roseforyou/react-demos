const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // },
        'react-vendor': {
          test: (module, chunks) => /react/.test(module.context),
          name: 'react-vendor',
          priority: 1,
        },
      },
    },
  },
});
