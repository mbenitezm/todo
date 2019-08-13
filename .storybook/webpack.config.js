const path = require('path');
const webpack = require('webpack');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          minimize: true,
          sourceMap: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          data: `$assetPrefix: '';`,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.assetPrefix': JSON.stringify(''),
    }),
  );

  // Return the altered config
  return config;
};
