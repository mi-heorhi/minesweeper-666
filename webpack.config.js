const webpack = require('webpack');
module.exports = {
	entry: {
		bundle: './app/App.js',
	},
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
	   { 
		test: /\.css$/, 
		loader: "style-loader!css-loader" 
		}
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}