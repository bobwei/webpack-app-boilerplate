/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const SRC_PATH = 'src';
const BUILD_PATH = 'dist';
const PUBLIC_PATH = 'assets/';
const BUNDLE_NAME = 'bundle.js';

const config = {
  context: path.join(__dirname, SRC_PATH),
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loaders: [
          'eslint-loader',
        ],
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
  ],
  output: {
    filename: BUNDLE_NAME,
    path: path.join(__dirname, BUILD_PATH),
    publicPath: PUBLIC_PATH,
  },
  devServer: {
    contentBase: path.join(__dirname, SRC_PATH),
  },
};

export default config;
