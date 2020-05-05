const path = require("path");

module.exports = {
  webpackConfig: require('./webpack.js'),
  components: "src/components/**/*.tsx",
  propsParser: require("react-docgen-typescript").parse

};
