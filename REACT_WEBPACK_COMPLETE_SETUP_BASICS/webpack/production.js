const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLMinifier = require("html-minifier");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

function buildProductionConfig(env, dirname) {
  console.log("Start build for NODE_ENV: ", env.NODE_ENV);
  return {
    entry: dirname + "/src/index.js",
    output: {
      path: dirname + "/dist",
      filename: "index.js",
      publicPath: "/"
    },
    mode: "production",
    resolve: {
      extensions: [".js", ".json", ".ts", ".jsx", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]]
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(
        [
          {
            from: "src/index.html",
            to: dirname + "/dist",
            transform(htmlAsBuffer) {
              return Buffer.from(
                HTMLMinifier.minify(htmlAsBuffer.toString("utf8"), {
                  collapseWhitespace: true,
                  collapseBooleanAttributes: true,
                  collapseInlineTagWhitespace: true
                })
              );
            }
          }
        ],
        {}
      ),
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        cache: true
      }),
      new BundleAnalyzerPlugin({ analyzerMode: "static" }),
      new webpack.SourceMapDevToolPlugin({
        filename: "sourcemaps/[file].map",
        lineToLine: true
      })
    ],
    performance: {
      hints: "warning"
    }
  };
}
module.exports = buildProductionConfig;
