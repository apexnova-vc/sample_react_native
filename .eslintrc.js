module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
      },
    ],
    "no-use-before-define": [
      "error",
      {
        variables: false,
      },
    ],
    "no-empty-function": 0,
    "no-console": 0,
    "prettier/prettier": [
      2,
      {
        usePrettierrc: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        argsIgnorePattern: "_*",
      },
    ],
  },
};
