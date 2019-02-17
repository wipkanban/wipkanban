const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/client/index.tsx"],
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
