const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const { DefinePlugin } = require("webpack")
const path = require("path")
const packageName = require("./package.json").name

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  devServer: {
    port: 7200,
    open: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true, //设置为 true 以启用 Options API。
      __VUE_PROD_DEVTOOLS__: false, // 设置为 false 以禁用生产环境中的 Vue Devtools
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, //设置为 false 以禁用生产环境中的水合失配详细信息
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
  },
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
}
