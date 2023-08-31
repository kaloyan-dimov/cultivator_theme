const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "main.js.liquid",
  },
  module: {
    rules: [
      {
        test: /\.(sass|less|css|scss|liquid)$/,
        use: [
			MiniCssExtractPlugin.loader,
			// "style-loader",
			"css-loader",
			"postcss-loader",
			"sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          }
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf)$/i,
        loader: "url-loader",
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
	//   path: path.resolve(__dirname, "assets"),
      filename: "main.css",
    }),
  ],
};
