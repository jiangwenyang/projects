module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    );

    return config;
  }
};
