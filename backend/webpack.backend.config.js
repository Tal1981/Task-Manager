const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
   mode: 'production',
   devtool: 'source-map',
   entry: './backend/src/server.js',
   output: {
      path: path.resolve(__dirname, '../product'),
      filename: '[name].js',
   },
   module: {
      rules: [
         {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
                  options: {
                     presets: [['@babel/preset-env']]
                  },
               },
            ],
         },
      ],
   },
   // plugins: [
   //    new Dotenv()
   // ],
   resolve: {
      extensions: ['.js'],
   },
   target: 'node',
   externals: [nodeExternals()],
};
