module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@stylistic/all-extends",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",

  plugins: ["react-refresh", "@typescript-eslint", "@stylistic"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@stylistic/indent": ["error", "tab"],
    "@stylistic/quotes": ["error", "single"],
    "@stylistic/semi": ["error", "never"],
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/object-curly-spacing": ["error", "always"],
  },
};
