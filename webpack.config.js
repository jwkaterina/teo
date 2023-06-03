const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const postCssNormalize = require("postcss-normalize");
module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  devtool: "inline-source-map",
  devServer: {
    client: {
      overlay: true
    },
    hot: true,
    // static: {
    //   directory: path.join(__dirname, "./"),
    // },
    watchFiles: ["src/*"]
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: Object.assign({}, undefined),
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-flexbugs-fixes"),
                  require("postcss-preset-env")({
                    autoprefixer: {
                      flexbox: "no-2009"
                    },
                    stage: 3
                  }),
                  postCssNormalize()
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|map)$/i,
        type: "asset/resource"
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [{from: "src/img", to: "img"}]
    // })
  ]
};