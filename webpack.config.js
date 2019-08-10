const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode:  'development'
};

resolve: {
  modules: [
    path.join(__dirname, "src"),
    "node_modules"
  ]
}
