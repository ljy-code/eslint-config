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
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "prettier", "markdown"],
  rules: {
    "prettier/prettier": "error",
    "vue/no-v-html": "off",
  },
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      files: ["**/*.md/*.{vue}"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "no-unused-vars": "error",
        "no-console": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
      },
    },
    {
      files: ["**/*.md/*.{jsx,tsx}"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "no-unused-vars": "error",
        "no-console": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
      },
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
