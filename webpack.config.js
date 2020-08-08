const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "smooshpack.js",
    path: path.resolve(__dirname, "dist/umd"),
    library: "smooshpack",
    libraryTarget: "umd",
  },
  mode: "production",
};
