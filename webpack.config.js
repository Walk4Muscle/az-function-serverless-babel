var nodeExternals = require('webpack-node-externals')

module.exports = {
   entry: './src/handler.js',
   target: 'node',
   externals: [nodeExternals()],
   output: {
      libraryTarget: 'commonjs',
      path: __dirname,
      filename: 'handler.js', // this should match the first part of function handler in serverless.yml
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: __dirname,
            loaders: ["babel-loader"]
         }
      ]
   }
};