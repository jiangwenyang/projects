const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],

  css: ["./styles/**/*.css"],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
