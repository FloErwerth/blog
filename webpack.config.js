const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    publicPath: "/",
  },
  devServer: {
    port: "3000",
    static: "./dist",
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: [{ loader: "svg-url-loader", options: { limit: 10000 } }],
      },
      {
        test: /\.(jpg|jpeg|png|mp4)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      title: "Florian Erwerth's Blog",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
