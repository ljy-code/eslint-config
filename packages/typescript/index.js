const basic = require("@ljy-code/eslint-config-basic");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@ljy-code/eslint-config-basic",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    ...basic.overrides,
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
  ],
};
