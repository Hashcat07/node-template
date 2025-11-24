import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    ignores: [
      "**/*.config.js",
      "**/webpack.*.js",
      "**/node_modules/**",
      "**/dist/**",
      "!**/eslint.config.js",
    ],
  },

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    extends: [js.configs.recommended],
    plugins: {
      react: pluginReact,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  eslintConfigPrettier,
]);

