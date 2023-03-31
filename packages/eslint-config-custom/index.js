module.exports = {
  extends: ["turbo", "prettier"],
  rules: {
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
