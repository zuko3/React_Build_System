const webpack = require("webpack");

function buildDevelopementConfig(env, dirname) {
  console.log("Start build for NODE_ENV: ", env.NODE_ENV);
  return {
    entry: dirname + "/src/index.js",
    output: {
      path: dirname + "/dist",
      filename: "index.js",
      publicPath: "/"
    },
    mode: "development",
    resolve: {
      extensions: [".js", ".json", ".ts", ".jsx", ".tsx"]
    },
    devServer: {
      contentBase: dirname + "/src",
      publicPath: "/",
      hotOnly: true,
      overlay: true
    },
    devtool: "cheap-module-eval-source-map",
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
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}
module.exports = buildDevelopementConfig;
