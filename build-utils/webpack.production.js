const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = () => ({
  output: {
    filename: "bundle[chunk].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
          },
          "css-loader",
          "resolve-url-loader",

          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
