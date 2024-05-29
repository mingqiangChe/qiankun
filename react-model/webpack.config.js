const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const packageName = require("./package.json").name

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  devServer: {
    port: 7100,
    open: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
  },
}
