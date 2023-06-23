const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: {
    app: './src/app/index.tsx',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9000,
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        resolve: { extensions: ['.ts', '.tsx'] },
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html lang="en">
          <body>
            <div id="root"></div>
          </body>
        </html>`,
      title: 'Parallel',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.performance.hints = false;
  }

  return config;
};