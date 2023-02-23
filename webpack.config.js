const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "async-node",
  mode: "production",
  entry: "./app.vue",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
};
