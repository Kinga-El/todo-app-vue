module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-unused-vars": "off",
    "vue/no-unused-vars": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/padding-line-between-blocks": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": ["error", { trailingComma: "all" }],
  },
};