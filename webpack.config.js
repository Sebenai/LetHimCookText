import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const projectDir = dirname(fileURLToPath(import.meta.url));

// Ini akan digunakan dalam perintah "webpack serve"
const devLocalServerSetup = {
  devServer: {
    static: path.resolve(projectDir, 'public'),
    hot: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: '127.0.0.1',
    port: 8080
  },
}

const config = {
  mode: 'development',
  entry: './src/editor.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(projectDir, 'public', 'js'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  ...devLocalServerSetup
};

export default config;
