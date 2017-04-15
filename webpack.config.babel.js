import path from 'path';

const SRC_PATH = 'src';
const BUILD_PATH = 'dist';
const PUBLIC_PATH = 'assets/';
const BUNDLE_NAME = 'bundle.js';

const config = {
  entry: path.join(__dirname, SRC_PATH, 'index.js'),
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
