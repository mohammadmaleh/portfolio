const htmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

const path = require("path");
const modeConfig = env => require(`./build-utils/webpack.${env.mode}`)(env);
const presetConfig = require("./build-utils/loadPresets");

const webpackMerge = require("webpack-merge");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },

          {
            test: /\.(gif|png|jpe?g|svg)$/,
            use: [{ loader: "url-loader", options: { limit: 2400 } }]
          },
          {
            test: /\.mp4$/,
            use: "file-loader"
          }
        ]
      },
      plugins: [
        new htmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new CleanWebpackPlugin("dist"),
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]
    },

    modeConfig({ mode, presets }),
    presetConfig({ mode, presets })
  );
};
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader"
//           }
//         ]
//       },
//       {
//         test: /\.(_progress.scss)$/,
//         use: [
//           {
//             loader: "style-loader" // inject CSS to page
//           },
//           {
//             loader: "css-loader" // translates CSS into CommonJS modules
//           },
//           {
//             loader: "postcss-loader", // Run post css actions
//             options: {
//               plugins: function() {
//                 // post css plugins, can be exported to postcss.config.js
//                 return [require("precss"), require("autoprefixer")];
//               }
//             }
//           },
//           {
//             loader: "sass-loader" // compiles Sass to CSS
//           }
//         ]
//       },
//       {
//         test: /\.(jpg|png|gif|svg|pdf|ico|mp4)$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               name: "[path][name]-[hash:8].[ext]"
//             }
//           }
//         ]
//       },
//       {
//         test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: "url-loader?limit=10000&mimetype=application/font-woff"
//       },
//       {
//         test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: "file-loader"
//       },
//       {
//         test: /\.mp4$/,
//         loader: "file-loader"
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/index.html",
//       filename: "./index.html"
//     })
//   ],
//   output: {
//     filename: "bundle.js",
//     path: path.join(__dirname, "public"),
//     publicPath: path.join(__dirname, "public")
//   }
// };
