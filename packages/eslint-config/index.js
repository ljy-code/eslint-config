module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
    },
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
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
};
