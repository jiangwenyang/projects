const path = require("path");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    );

    return config;
  }
});
