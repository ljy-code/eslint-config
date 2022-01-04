module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "prettier", "markdown"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/ban-ts-comment": "off",
  },
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      files: ["**/*.md/*.{js,ts}"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off",
        "no-console": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
      },
    },
  ],
};
