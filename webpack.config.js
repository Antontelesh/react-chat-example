module.exports = {
  entry: './src/client/app.js',
  output: {
    filename: 'app.js',
    path: './public/assets'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
      {test: /\.css$/, loaders: ['style', 'css?modules&importLoaders=1', 'postcss-loader']},
    ]
  },
  postcss: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-custom-properties')
  ]
};
