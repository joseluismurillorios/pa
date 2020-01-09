/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require("postcss-uncss")({
      html: [
        "src/index.html"
      ]
    }),
    require("autoprefixer"),
  ],
};
