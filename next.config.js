module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      }
    );

    return config;
  },
};
