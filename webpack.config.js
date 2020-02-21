const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { optimize } = require('webpack');
const { join } = require('path');
const prodPlugins = [];
/* if production
  prodPlugins.push(
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin()
  );
 */
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    'background': join(__dirname, 'chrome-extension-src/background/main.ts'),
    'generalSite': join(__dirname, 'chrome-extension-src/generalSite/main.ts'),
    'cambridgeSite': join(__dirname, 'chrome-extension-src/cambridgeSite/main.ts'),
  },
  output: { 
    path: join(__dirname, 'chrome-extension'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        use: 'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    ...prodPlugins,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};