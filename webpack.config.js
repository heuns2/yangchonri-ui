const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode:  'development'
};

resolve: {
  modules: [
      {
          module: {
              rules: [
                  {
                      test: /\.css$/,
                      use: [
                          { loader: "style-loader" },
                          { loader: "css-loader" }
                      ]
                  }
              ]
          }
      }
  ]
}
