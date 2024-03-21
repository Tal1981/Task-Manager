const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
   mode: 'production',
   devtool: 'source-map',
   entry: {
      index: './frontend/src/views/js/index.js',
      edit: './frontend/src/views/js/edit.js',
   },
   output: {
      path: path.resolve(__dirname, '../product'),
      filename: '[name].js',
      "publicPath": "/",
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [['@babel/preset-env']]
               }
            },
         },
         {
            test: /\.css$/i,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: "css-loader",
                  options: {
                     sourceMap: true,
                  },
               }, ,
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './frontend/src/views/html/index.html',
         filename: 'index.html',
         chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
         template: './frontend/src/views/html/edit.html',
         filename: 'edit.html',
         chunks: ['edit'],
      }),
      // new CopyWebpackPlugin({
      //    patterns: [
      //       { from: './frontend/src/public', to: './public' },
      //    ],
      // }),
      new MiniCssExtractPlugin({
         filename: 'index.css',
      }),
   ],
   resolve: {
      extensions: ['.js'],
   },
   externals: [nodeExternals()],
};
