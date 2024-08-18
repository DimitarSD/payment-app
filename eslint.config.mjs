import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "dist/",
      "build/",
      "out/",
      "node_modules/",
      ".env",
      "package-lock.json",
      "yarn.lock",
      "*.log",
      "coverage/",
      ".vscode/",
      ".idea/",
      "*.tmp",
      "*.swp",
      "cypress/screenshots/", 
      "cypress/videos/",
      "cypress/downloads/",
    ],
  },
];