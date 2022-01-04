module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2021,
    ecmaFeatures: {
      tsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "vue", "prettier", "markdown"],
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
