module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["scripts/**/*.*"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
  rules: {
    "prettier/prettier": "error",
    eqeqeq: ["error", "smart"],
  },
};
